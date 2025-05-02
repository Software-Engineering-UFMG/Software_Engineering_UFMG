import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  IconButton,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { getMe, updateUser } from "../../services/api";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import { useAuth } from "../../context/AuthContext";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";

export const Edit = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    phone: "",
    username: "",
    password: "",
    role: "Assistencial",
    especialidade: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    birthDate: false,
    phone: false,
    especialidade: false,
  });
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [changePassword, setChangePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);

  
  const especialidadeOptions = [
    "Clínica Médica",
    "Cardiologia",
    "Pediatria",
    "Gastroenterologia",
    "Estudante de Medicina",
  ];

  useEffect(() => {
    if (!user && !isLoading) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const me = await getMe();
        setUserId(me.id);
        setFormData({
          name: me.name || "",
          birthDate: me.birthDate || "",
          phone: me.phone || "",
          username: me.username || "",
          password: "",
          role: me.role || "Assistencial",
          especialidade: me.especialidade || me.specialty || "",
        });
      } catch (error) {
        
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as string]: value });
    setFieldErrors((prev) => ({ ...prev, [name as string]: false }));
  };

  const handleEspecialidadeChange = (e: any) => {
    setFormData({ ...formData, especialidade: e.target.value });
    setFieldErrors((prev) => ({ ...prev, especialidade: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      name: !formData.name.trim(),
      birthDate: !formData.birthDate.trim(),
      phone: !formData.phone.trim(),
      especialidade: !formData.especialidade.trim(),
    };

    setFieldErrors(errors);

    if (Object.values(errors).some(Boolean)) return;

    setPasswordError(null);
    setConfirmPasswordError(null);

    if (changePassword) {
      if (!formData.password || formData.password.length < 6) {
        setPasswordError("A senha deve ter pelo menos 6 caracteres.");
        return;
      }
      if (formData.password !== confirmPassword) {
        setConfirmPasswordError("As senhas não coincidem.");
        return;
      }
    }

    try {
      setLoading(true);
      if (userId === null) return;
      const updatedData: any = {
        name: formData.name,
        birthDate: formData.birthDate,
        phone: formData.phone,
        username: formData.username,
        role: formData.role,
        especialidade: formData.especialidade,
        specialty: formData.especialidade, // ensure specialty is sent as well
      };
      if (changePassword) {
        updatedData.password = formData.password;
      }
      await updateUser(userId, updatedData);
      navigate("/preceptor");
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: 400, sm: 600, md: 800 },
        margin: "0 auto",
        marginTop: 4,
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-3">
            <img
              src={hospitalLogo}
              alt="Hospital logo"
              className="h-[100px] rounded-3xl"
            />
            <Typography variant="h4" gutterBottom>
              Editar Cadastro
            </Typography>
          </div>
          <TextField
            label="Nome"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            error={fieldErrors.name}
            helperText={fieldErrors.name ? "O nome não pode estar em branco." : ""}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                label="Data de nascimento"
                format="DD-MM-YYYY"
                value={formData.birthDate ? dayjs(formData.birthDate) : null}
                onChange={newVal => {
                  const iso = newVal?.toISOString() || '';
                  setFormData(prev => ({ ...prev, birthDate: iso }));
                  setFieldErrors(prev => ({ ...prev, birthDate: !iso }));
                }}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    margin: 'normal',
                    error: fieldErrors.birthDate,
                    helperText: fieldErrors.birthDate ? "A data de nascimento é obrigatória." : "",
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            label="Telefone"
            name="phone"
            fullWidth
            margin="normal"
            value={formData.phone}
            onChange={handleChange}
            error={fieldErrors.phone}
            helperText={fieldErrors.phone ? "O telefone é obrigatório." : ""}
          />
          <TextField
            label="Login"
            name="username"
            fullWidth
            margin="normal"
            value={formData.username}
            InputProps={{ readOnly: true }}
          />
          <FormControl fullWidth margin="normal" error={fieldErrors.especialidade}>
            <InputLabel id="especialidade-label">Especialidade</InputLabel>
            <Select
              labelId="especialidade-label"
              name="especialidade"
              value={formData.especialidade}
              label="Especialidade"
              onChange={handleEspecialidadeChange}
            >
              {especialidadeOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            {fieldErrors.especialidade && (
              <Typography variant="caption" color="error">
                A especialidade é obrigatória.
              </Typography>
            )}
          </FormControl>
          <FormControl component="fieldset" fullWidth margin="dense">
            <Typography variant="subtitle1">Troca senha?</Typography>
            <RadioGroup
              row
              value={changePassword ? "Sim" : "Não"}
              onChange={(e) => setChangePassword(e.target.value === "Sim")}
            >
              <FormControlLabel value="Não" control={<Radio />} label="Não" />
              <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
            </RadioGroup>
          </FormControl>
          {changePassword && (
            <>
              <TextField
                label="Nova Senha"
                name="password"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
                error={!!passwordError}
                helperText={passwordError}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
              <TextField
                label="Confirmar Nova Senha"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setConfirmPasswordError(null);
                }}
                error={!!confirmPasswordError}
                helperText={confirmPasswordError}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
            </>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              marginTop: 2,
              backgroundColor: "#86efac",
              color: "white",
              "&:hover": { backgroundColor: "#4ade80" },
            }}
          >
            Salvar Alterações
          </Button>
          <Button
            onClick={() => navigate("/preceptor")}
            variant="text"
            fullWidth
            sx={{
              marginTop: 2,
              backgroundColor: "#86efac",
              color: "white",
              "&:hover": { backgroundColor: "#4ade80" },
            }}
          >
            Cancelar
          </Button>
        </form>
      )}
    </Box>
  );
};

export default Edit;

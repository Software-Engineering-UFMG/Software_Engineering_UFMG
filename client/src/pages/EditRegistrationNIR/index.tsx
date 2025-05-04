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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { getMe, updateUser } from "../../services/api";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import { useAuth } from "../../context/AuthContext";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

export const EditNir = () => {
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
    role: "NIR",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    birthDate: false,
    phone: false,
  });
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [changePassword, setChangePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState<
    string | null
  >(null);

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
          role: me.role || "NIR",
        });
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      name: !formData.name.trim(),
      birthDate: !formData.birthDate.trim(),
      phone: !formData.phone.trim(),
    };

    setFieldErrors(errors);

    if (Object.values(errors).some(Boolean)) return;

    setPasswordError(null);
    setConfirmPasswordError(null);
    setCurrentPasswordError(null);

    if (changePassword) {
      if (!currentPassword) {
        setCurrentPasswordError("A senha atual é obrigatória.");
        return;
      }
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
      let formattedBirthDate = formData.birthDate;
      if (formattedBirthDate) {
        const d = dayjs(formattedBirthDate);
        if (d.isValid()) {
          formattedBirthDate = d.format("DD/MM/YYYY");
        }
      }
      const updatedData: any = {
        name: formData.name,
        birthDate: formattedBirthDate,
        phone: formData.phone,
        username: formData.username,
        role: formData.role,
      };
      if (changePassword) {
        updatedData.password = formData.password;
        updatedData.currentPassword = currentPassword;
      }
      await updateUser(updatedData);
      navigate("/NIRMainpage");
    } catch (error: any) {
      const backendMsg =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message;

      if (
        error?.response?.status === 401 ||
        (typeof backendMsg === "string" &&
          backendMsg.toLowerCase().includes("current password is incorrect"))
      ) {
        setCurrentPasswordError("Senha atual incorreta.");
        setLoading(false);
        return;
      }
      if (
        typeof backendMsg === "string" &&
        backendMsg.toLowerCase().includes("date format")
      ) {
        setFieldErrors((prev) => ({ ...prev, birthDate: true }));
      }
      if (Array.isArray(error?.response?.data)) {
        error.response.data.forEach((err: any) => {
          if (err.path?.includes("currentPassword")) {
            setCurrentPasswordError("Senha atual incorreta.");
          }
          if (err.path?.includes("birthDate")) {
            setFieldErrors((prev) => ({ ...prev, birthDate: true }));
          }
        });
      }
      if (Array.isArray(error?.response?.data?.errors)) {
        error.response.data.errors.forEach((err: any) => {
          if (err.path?.includes("currentPassword")) {
            setCurrentPasswordError("Senha atual incorreta.");
          }
          if (err.path?.includes("birthDate")) {
            setFieldErrors((prev) => ({ ...prev, birthDate: true }));
          }
        });
      }
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
            helperText={
              fieldErrors.name ? "O nome não pode estar em branco." : ""
            }
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Data de nascimento"
                format="DD-MM-YYYY"
                value={formData.birthDate ? dayjs(formData.birthDate) : null}
                onChange={(newVal) => {
                  const iso = newVal?.toISOString() || "";
                  setFormData((prev) => ({ ...prev, birthDate: iso }));
                  setFieldErrors((prev) => ({ ...prev, birthDate: !iso }));
                }}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    margin: "normal",
                    error: fieldErrors.birthDate,
                    helperText: fieldErrors.birthDate
                      ? "A data de nascimento é obrigatória ou está em formato inválido (dd/MM/yyyy)."
                      : "",
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
                label="Senha Atual"
                name="currentPassword"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                value={currentPassword}
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                  setCurrentPasswordError(null);
                }}
                error={!!currentPasswordError}
                helperText={currentPasswordError}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
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
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
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
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
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
            onClick={() => navigate("/NIRMainpage")}
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

export default EditNir;

import { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  SelectChangeEvent,
  FormHelperText
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import { createUser, checkLdapUser } from "../../services/api";

export const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    login: "",
    password: "", // Keep password for LDAP check only
    userType: "",
    specialty: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    login: false,
    loginExists: false,
    userType: false,
    specialty: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [ldapError, setLdapError] = useState<string | null>(null);

  const specialties = [
    "Clínica Médica",
    "Cardiologia",
    "Pediatria",
    "Gastroenterologia",
    "Estudante de Medicina",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'login' && errors.loginExists) {
      setErrors(prev => ({ ...prev, loginExists: false }));
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'userType' && value !== 'Assistencial' && { specialty: '' }),
    }));

    setErrors(prev => ({
      ...prev,
      [name]: false,
      ...(name === 'userType' && { userType: false }),
      ...(name === 'specialty' && { specialty: false }),
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration form submitted");

    // Only validate fields required for user creation
    const validationErrors = {
      fullName: formData.fullName.trim() === '',
      login: formData.login.trim() === '',
      loginExists: false,
      userType: formData.userType.trim() === '',
      specialty:
        formData.userType === 'Assistencial' &&
        formData.specialty.trim() === '',
    };

    setErrors(validationErrors);
    setLdapError(null);
    if (Object.values(validationErrors).some(Boolean)) {
      console.log("Validation failed:", validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      console.log("Calling checkLdapUser with:", formData.login, formData.password);

      if (!formData.login || !formData.password) {
        console.error("Login or password missing, not calling API");
        setLdapError("Login e senha são obrigatórios para verificação LDAP.");
        setIsLoading(false);
        return;
      }

      // Step 1: Check LDAP first
      const ldapRes = await checkLdapUser(formData.login, formData.password);
      console.log("LDAP response:", ldapRes);

      // Step 2: If LDAP returns false, block user creation
      if (!ldapRes.exists) {
        setLdapError("Usuário não existe no servidor do hospital ou a senha está incorreta. Por favor tente novamente!.");
        setIsLoading(false);
        return; // STOP HERE - do not create user
      }

      // Step 3: Only if LDAP returns true, proceed to create user
      console.log("LDAP verification successful. Proceeding to create user...");

      await createUser({
        name: formData.fullName,
        username: formData.login,
        role: formData.userType as 'NIR' | 'Assistencial' | 'Admin',
        specialty: formData.specialty,
      });

      navigate('/success');
    } catch (error) {
      console.error("Error in registration submit:", error);
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        setErrors(prev => ({ ...prev, loginExists: true })); // Sets error state
      } else {
        setLdapError("Erro interno. Tente novamente mais tarde.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: 400, sm: 600, md: 800 },
        mx: 'auto',
        my: 4,
        p: 2,
        pb: 4,
        border: '1px solid #ccc',
        borderRadius: 2,
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <img
          src={hospitalLogo}
          alt="Hospital logo"
          className="h-[100px] rounded-3xl"
        />
        <Typography variant="h4" gutterBottom className="text-center">
          Cadastro de usuário
        </Typography>
      </div>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nome completo"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          margin="normal"
          error={errors.fullName}
          helperText={errors.fullName && 'Este campo não pode ficar vazio'}
        />

        <TextField
          fullWidth
          label="Login da Ebserh"
          name="login"
          value={formData.login}
          onChange={handleChange}
          margin="normal"
          error={errors.login || errors.loginExists}
          helperText={
            errors.login
              ? 'Este campo não pode ficar vazio'
              : errors.loginExists
                ? 'Este login já está em uso'
                : ''
          }
        />

        <TextField
          fullWidth
          label="Senha da Ebserh"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          helperText="Senha usada apenas para verificação LDAP"
        />

        <FormControl
          component="fieldset"
          margin="normal"
          error={errors.userType}
        >
          <Typography variant="subtitle1">Tipo de usuário</Typography>
          <RadioGroup
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <FormControlLabel value="NIR" control={<Radio />} label="NIR" />
            <FormControlLabel value="Assistencial" control={<Radio />} label="Assistencial" />
          </RadioGroup>
          {errors.userType && (
            <Typography variant="caption" color="error">
              Pelo menos uma opção deve ser selecionada
            </Typography>
          )}
        </FormControl>

        {formData.userType === "Assistencial" && (
          <FormControl fullWidth margin="normal" error={errors.specialty}>
            <InputLabel id="specialty-label">Especialidade</InputLabel>
            <Select
              labelId="specialty-label"
              id="specialty-select"
              name="specialty"
              value={formData.specialty}
              onChange={handleSelectChange}
              label="Especialidade"
            >
              {specialties.map(s => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
            {errors.specialty && (
              <FormHelperText>Este campo não pode ficar vazio</FormHelperText>
            )}
          </FormControl>
        )}

        {ldapError && (
          <Typography color="error" sx={{ mt: 1, mb: 1 }}>
            {ldapError}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isLoading}
          sx={{ mt: 2, backgroundColor: '#86efac', '&:hover': { backgroundColor: '#4ade80' } }}
        >
          {isLoading ? 'CARREGANDO...' : 'Solicitar cadastro'}
        </Button>

        <Button component={RouterLink} to="/" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#86efac', '&:hover': { backgroundColor: '#4ade80' }}}>
          Voltar
        </Button>
      </form>
    </Box>
  );
};

export default Registration;
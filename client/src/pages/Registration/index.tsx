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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import axios from 'axios';
import { createUser } from "../../services/api";

export const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    login: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "",
    specialty: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    birthDate: false,
    login: false,
    loginExists: false,
    phone: false,
    password: false,
    confirmPassword: false,
    birthDateFuture: false,
    userType: false,
    specialty: false,
  });

  const [isLoading, setIsLoading] = useState(false);

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

    if (name === 'phone') {
      const raw = value.replace(/\D/g, '');
      let formatted = raw;
      if (raw.length <= 2) formatted = `(${raw}`;
      else if (raw.length <= 7) formatted = `(${raw.slice(0,2)})${raw.slice(2)}`;
      else formatted = `(${raw.slice(0,2)})${raw.slice(2,7)}-${raw.slice(7,11)}`;

      setFormData(prev => ({ ...prev, phone: formatted }));
      setErrors(prev => ({ ...prev, phone: false }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'userType' && value !== 'Assistencial' && { specialty: '' }),
    }));

    setErrors(prev => ({
      ...prev,
      [name]: false,
      ...(name === 'birthDate' && { birthDateFuture: false }),
      ...(name === 'confirmPassword' && { confirmPassword: value !== formData.password }),
      ...(name === 'userType' && { userType: false }),
      ...(name === 'specialty' && { specialty: false }),
    }));

    if (name === 'birthDate') {
      const isFuture = new Date(value) > new Date();
      setErrors(prev => ({ ...prev, birthDateFuture: isFuture }));
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const today = new Date();

    const validationErrors = {
      fullName: formData.fullName.trim() === '',
      birthDate: formData.birthDate.trim() === '',
      login: formData.login.trim() === '',
      loginExists: false,
      phone: formData.phone.trim() === '',
      password: formData.password.trim() === '',
      confirmPassword:
        formData.confirmPassword.trim() === '' ||
        formData.confirmPassword !== formData.password,
      birthDateFuture: new Date(formData.birthDate) > today,
      userType: formData.userType.trim() === '',
      specialty:
        formData.userType === 'Assistencial' &&
        formData.specialty.trim() === '',
    };

    setErrors(validationErrors);
    if (Object.values(validationErrors).some(Boolean)) return;

    setIsLoading(true);
    try {
      await createUser({
        name: formData.fullName,
        birthDate: formData.birthDate,
        username: formData.login,
        phone: formData.phone,
        password: formData.confirmPassword,
        role: formData.userType as 'NIR' | 'Assistencial' | 'Admin',
        specialty: formData.specialty,
      });
      navigate('/success');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        setErrors(prev => ({ ...prev, loginExists: true }));
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

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Data de nascimento"
              format="DD-MM-YYYY"
              value={formData.birthDate ? dayjs(formData.birthDate) : null}
              onChange={newVal => {
                const iso = newVal?.toISOString() || '';
                setFormData(prev => ({ ...prev, birthDate: iso }));
                const future = newVal ? newVal.toDate() > new Date() : false;
                setErrors(prev => ({ ...prev, birthDate: !iso, birthDateFuture: future }));
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  margin: 'normal',
                  error: errors.birthDate || errors.birthDateFuture,
                  helperText:
                    errors.birthDate
                      ? 'Este campo não pode ficar vazio'
                      : errors.birthDateFuture
                        ? 'A data não pode ser futura'
                        : '',
                },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>

        <TextField
          fullWidth
          label="Login"
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
          label="Telefone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
          error={errors.phone}
          helperText={errors.phone && 'Este campo não pode ficar vazio'}
        />

        <TextField
          fullWidth
          label="Senha"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          error={errors.password}
          helperText={errors.password && 'Este campo não pode ficar vazio'}
        />

        <TextField
          fullWidth
          label="Confirmar senha"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          margin="normal"
          error={errors.confirmPassword}
          helperText={
            errors.confirmPassword
              ? (!formData.confirmPassword.trim()
                  ? 'Este campo não pode ficar vazio'
                  : 'As senhas não coincidem')
              : ''
          }
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
            
            <FormControlLabel
              value="Assistencial"
              control={<Radio />}
              label="Assistencial"
            />
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

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isLoading}
          sx={{ mt: 2, backgroundColor: '#86efac', '&:hover': { backgroundColor: '#4ade80' } }}
        >
          {isLoading ? 'CARREGANDO...' : 'Registrar'}
        </Button>

        <Button component={RouterLink} to="/" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#86efac', '&:hover': { backgroundColor: '#4ade80' }}}>
          Voltar
        </Button>
      </form>
    </Box>
  );
};

export default Registration;

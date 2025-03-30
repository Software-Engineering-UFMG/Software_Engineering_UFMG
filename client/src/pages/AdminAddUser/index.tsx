import React, { useState } from "react";
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
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router"; // Add useNavigate import
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";

export const RegisterUserAsAdmin = () => {
  const navigate = useNavigate(); // Initialize useNavigate

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
    phone: false,
    confirmPassword: false,
    birthDateFuture: false,
    userType: false, // Add error state for userType
  });

  const specialties = [
    "Clínica médica",
    "Cardiologia",
    "Pediatria",
    "Gastroenterologia",
    "Estudante de medicina",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the field being updated
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
      ...(name === "birthDate" && { birthDateFuture: false }),
      ...(name === "confirmPassword" && { confirmPassword: value !== formData.password }),
      ...(name === "userType" && { userType: false }), // Clear userType error
    }));

    if (name === "birthDate") {
      const selectedDate = new Date(value);
      const today = new Date();
      setErrors((prevErrors) => ({
        ...prevErrors,
        birthDateFuture: selectedDate > today,
      }));
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the field being updated
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      fullName: formData.fullName.trim() === "",
      birthDate: formData.birthDate.trim() === "",
      login: formData.login.trim() === "",
      phone: formData.phone.trim() === "",
      confirmPassword: formData.confirmPassword !== formData.password,
      birthDateFuture: new Date(formData.birthDate) > new Date(),
      userType: formData.userType.trim() === "", // Validate userType
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      // Format the birthDate to dd-mm-yyyy
      const formattedFormData = {
        ...formData,
        birthDate: formData.birthDate
          ? new Date(formData.birthDate).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }).replace(/\//g, "-") // Replace slashes with dashes
          : "",
      };

      console.log("Form submitted:", formattedFormData);

      // Simulate a successful response
      console.log("Simulating successful submission...");
      setTimeout(() => {
        console.log("Data successfully submitted!");
        navigate("/dashboard/addUserAsAdmin/successAdminAddUser"); // Navigate to the success page
      }, 1000); // Simulate a delay of 1 second
    } else {
      console.log("Form contains errors.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: 400, sm: 600, md: 800 }, // Adjust width for different screen sizes
        margin: "0 auto",
        marginTop: 4,
        marginBottom: 4,
        padding: 2,
        paddingBottom: 4,
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
        <div className="flex flex-col items-center gap-3">
            <img src={hospitalLogo} alt="Hospital logo"  className="h-[100px] rounded-3xl"/>
            <Typography variant="h4" gutterBottom>
        Cadastro de usuário como administrador
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
          helperText={errors.fullName ? "Este campo não pode ficar vazio" : ""}
        />
        <TextField
          fullWidth
          label="Data de nascimento"
          name="birthDate"
          type="date"
          value={formData.birthDate}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ shrink: true }}
          error={errors.birthDate || errors.birthDateFuture}
          helperText={
            errors.birthDate
              ? "Este campo não pode ficar vazio"
              : errors.birthDateFuture
              ? "A data não pode estar no futuro"
              : ""
          }
        />
        <TextField
          fullWidth
          label="Login"
          name="login"
          value={formData.login}
          onChange={handleChange}
          margin="normal"
          error={errors.login}
          helperText={errors.login ? "Este campo não pode ficar vazio" : ""}
        />
        <TextField
          fullWidth
          label="Telefone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
          error={errors.phone}
          helperText={errors.phone ? "Este campo não pode ficar vazio" : ""}
        />
        <TextField
          fullWidth
          label="Senha"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
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
          helperText={errors.confirmPassword ? "As senhas não coincidem" : ""}
        />
        <FormControl component="fieldset" margin="normal" error={errors.userType}>
          <Typography variant="subtitle1">Tipo de usuário</Typography>
          <RadioGroup
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <FormControlLabel value="NIR" control={<Radio />} label="NIR" />
            <FormControlLabel
              value="assistencial"
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
        {formData.userType === "assistencial" && (
          <FormControl fullWidth margin="normal">
            <InputLabel className="bg-green-50">Especialidade</InputLabel> {/* Add shrink property */}
            <Select
              name="specialty"
              value={formData.specialty}
              onChange={handleSelectChange}
            >
              {specialties.map((specialty) => (
                <MenuItem key={specialty} value={specialty}>
                  {specialty}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2, backgroundColor: "#86efac", "&:hover": { backgroundColor: "#4ade80" }}} // Use sx for custom styles
        >
          Registrar
        </Button>
        <Button
          component={RouterLink}
          to="/dashboard"
          variant="text"
          color="secondary"
          fullWidth
          sx={{ marginTop: 2, backgroundColor: "#86efac", "&:hover": { backgroundColor: "#4ade80" } }}
        >
          Voltar
        </Button>
      </form>
    </Box>
  );
};

export default RegisterUserAsAdmin;
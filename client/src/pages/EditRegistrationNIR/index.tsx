import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  
} from "@mui/material";
import { useNavigate } from "react-router";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";

export const EditNir = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Add loading state

  // Mock user data for pre-filling the form
  const userData = {
    fullName: "John Doe",
    birthDate: "1990-01-01",
    login: "johndoe",
    phone: "123456789",
    password: "",
    confirmPassword: "",
    userType: "assistencial",
    specialty: "Cardiologia",
  };

  const [formData, setFormData] = useState(userData);

  const [errors, setErrors] = useState({
    fullName: false,
    birthDate: false,
    phone: false,
    confirmPassword: false,
    birthDateFuture: false,
    userType: false,
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
      ...(name === "birthDate" && { birthDateFuture: false }),
      ...(name === "confirmPassword" && {
        confirmPassword: value !== formData.password,
      }),
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



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      fullName: formData.fullName.trim() === "",
      birthDate: formData.birthDate.trim() === "",
      phone: formData.phone.trim() === "",
      confirmPassword: formData.confirmPassword !== formData.password,
      birthDateFuture: new Date(formData.birthDate) > new Date(),
      userType: formData.userType.trim() === "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      setLoading(true); // Set loading to true
      console.log("Form submitted:", formData);
      setTimeout(() => {
        navigate("/NIRMainpage"); // Navigate after a delay
      }, 1000); // Simulate a delay of 1 second
    } else {
      console.log("Form contains errors.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: 400, sm: 600, md: 800 },
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
        <img
          src={hospitalLogo}
          alt="Hospital logo"
          className="h-[100px] rounded-3xl"
        />
        <Typography variant="h4" gutterBottom>
          Editar Cadastro
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
          margin="normal"
          InputProps={{ readOnly: true }}
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

        
        <Button
          onClick={() => {
            navigate("/NIRMainpage");
          }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            marginTop: 2,
            backgroundColor: "#86efac",
            "&:hover": { backgroundColor: "#4ade80" },
          }}
        >
          {loading ? "Carregando..." : "Salvar Alterações"}{" "}
          {/* Change text based on loading state */}
        </Button>
        <Button
          onClick={() => navigate("/NIRMainpage")}
          variant="text"
          color="secondary"
          fullWidth
          sx={{
            marginTop: 2,
            backgroundColor: "#86efac",
            "&:hover": { backgroundColor: "#4ade80" },
          }}
        >
          Cancelar
        </Button>
      </form>
    </Box>
  );
};

export default EditNir;

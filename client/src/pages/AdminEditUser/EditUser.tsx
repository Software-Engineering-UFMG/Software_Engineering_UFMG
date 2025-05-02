import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const specialties = [
  "Clínica médica",
  "Cardiologia",
  "Pediatria",
  "Gastroenterologia",
  "Estudante de medicina",
];

const EditUser = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<any | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchedUser = {
      id: parseInt(userId || "0"),
      name: "Usuário Admin",
      login: "admin",
      role: "Admin",
      specialty: "",
      birthDate: "1990-01-01",
      cellphone: "123456789",
      password: "",
    };
    setUser(fetchedUser);
  }, [userId]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSave = () => {
    navigate("/dashboard");
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="!p-10">
      <Typography variant="h4" gutterBottom>
        Editar Usuário
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Login"
            variant="outlined"
            fullWidth
            value={user.login}
            onChange={(e) => setUser({ ...user, login: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="role-label">Função</InputLabel>
            <Select
              labelId="role-label"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              label="Função"
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="NIR">NIR</MenuItem>
              <MenuItem value="Assistencial">Assistencial</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {user.role === "Assistencial" && (
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="specialty-label">Especialidade</InputLabel>
              <Select
                labelId="specialty-label"
                value={user.specialty}
                onChange={(e) => setUser({ ...user, specialty: e.target.value })}
                label="Especialidade"
              >
                {specialties.map((specialty) => (
                  <MenuItem key={specialty} value={specialty}>
                    {specialty}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            label="Data de Nascimento"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={user.birthDate}
            onChange={(e) => setUser({ ...user, birthDate: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Número de Celular"
            variant="outlined"
            fullWidth
            value={user.cellphone}
            onChange={(e) => setUser({ ...user, cellphone: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Senha"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <div style={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          sx={{
            fontSize: "16px",
            backgroundColor: "#86efac",
            "&:hover": { backgroundColor: "#4ade80" },
          }}
        >
          Salvar
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate("/dashboard")}
          sx={{ marginLeft: "10px" }}
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default EditUser;

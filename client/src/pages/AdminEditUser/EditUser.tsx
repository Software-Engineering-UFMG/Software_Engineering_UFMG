import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { TextField, Button, Grid, Typography } from "@mui/material";

const EditUser = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    // Fetch user data based on userId (replace with actual API call if needed)
    const fetchedUser = {
      id: parseInt(userId || "0"),
      name: "Usuário Admin",
      login: "admin",
      role: "Admin",
      specialty: "Cardiologia",
    };
    setUser(fetchedUser);
  }, [userId]);

  const handleSave = () => {
    console.log("User saved:", user);
    navigate("/dashboard"); // Redirect back to the dashboard
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
          <TextField
            label="Função"
            variant="outlined"
            fullWidth
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          />
        </Grid>
        {user.role === "Assistencial" && (
          <Grid item xs={12}>
            <TextField
              label="Especialidade"
              variant="outlined"
              fullWidth
              value={user.specialty}
              onChange={(e) => setUser({ ...user, specialty: e.target.value })}
            />
          </Grid>
        )}
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

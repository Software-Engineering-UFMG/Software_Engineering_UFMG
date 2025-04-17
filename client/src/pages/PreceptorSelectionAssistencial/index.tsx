import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import { MenuItem, Select, Typography, Box } from "@mui/material";

export const Preceptor = () => {
  const [user, setUser] = useState({ name: "", role: "" });
  const [preceptors, setPreceptors] = useState<string[]>([]);
  const [selectedPreceptor, setSelectedPreceptor] = useState<string | null>(
    null
  );
  const handleLogout = () => {
    console.log("Admin logged out");
    navigate("/"); // Redirect to the login page
  };
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data
    setUser({ name: "Nome do Usuário", role: "Assistencial" });

    // Fetch preceptors from database
    setPreceptors([
      "Gustavo Cancela Penna",
      "Isabela Nascimento Borges",
      "Mariana Benevides Santos Paiva",
      "Taciana Fernandes Araújo",
    ]);
  }, []);

  const handleContinue = () => {
    if (selectedPreceptor) {
      navigate("/assistencial/dashboard");
    }
  };

  return (
    <Box sx={{ p: 4, fontFamily: "Arial, sans-serif" }}>
      {/* Centralized Image */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <img
          src={hospitalLogo}
          alt="Hospital Logo"
          className="w-[10%] min-w-[100px] rounded-3xl"
        />
      </Box>

      {/* User Info and Edit Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {user.role}
          </Typography>
        </Box>
        <button
          onClick={() => navigate("/preceptor/editRegistration")}
          className="cursor-pointer rounded-xl bg-green-300 !p-3 text-white hover:bg-green-400"
        >
          Editar seu cadastro
        </button>
      </Box>

      {/* Dropdown for Preceptor Selection */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Select
          value={selectedPreceptor || ""}
          onChange={(e) => setSelectedPreceptor(e.target.value)}
          displayEmpty
          sx={{ width: "50%" }}
        >
          <MenuItem value="" disabled>
            Escolha seu preceptor
          </MenuItem>
          {preceptors.map((preceptor, index) => (
            <MenuItem key={index} value={preceptor}>
              {preceptor}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Bottom Buttons */}
      <Box sx={{ display: "flex", justifyContent: "end"  }}>
        <button
          onClick={handleLogout}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#86efac",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#4ade80")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#86efac")
          }
        >
          Logout
        </button>
        <button
          onClick={handleContinue}
          disabled={!selectedPreceptor}
          className={`cursor-pointer rounded-xl bg-green-300 !p-3 text-white hover:bg-green-400 ${
            !selectedPreceptor ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Continuar
        </button>
      </Box>
    </Box>
  );
};

export default Preceptor;

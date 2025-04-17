import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import { Typography, Box } from "@mui/material";

export const NIRMainpage = () => {
  const [user, setUser] = useState({ name: "", role: "" });
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Admin logged out");
    navigate("/"); // Redirect to the login page
  };

  const handleDashboardNavigation = () => {
    navigate("/nir/patientDashboard"); // Redirect to the patient dashboard
  };

  useEffect(() => {
    // Fetch user data
    setUser({ name: "Nome do Usuário", role: "NIR" });
  }, []);

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
          onClick={() => navigate("/NIRMainpage/editNir")}
          className="cursor-pointer rounded-xl bg-green-300 !p-3 text-white hover:bg-green-400"
        >
          Editar seu cadastro
        </button>
      </Box>

      {/* Dashboard Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <button
          onClick={handleDashboardNavigation}
          className="cursor-pointer rounded-xl bg-green-300 !p-3 text-white hover:bg-green-400"
        >
          Dashboard de pacientes
        </button>
      </Box>

      {/* Bottom Buttons */}
      <Box sx={{ display: "flex", justifyContent: "end" }}>
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
      </Box>
    </Box>
  );
};

export default NIRMainpage;

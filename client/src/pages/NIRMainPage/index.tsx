import { useEffect } from "react";
import { useNavigate } from "react-router";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import { Typography, Box } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

export const NIRMainpage = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  const { handleLogout: authLogout } = useAuth();

  const handleLogoutClick = async () => {
    await authLogout();
    navigate("/");
  };
  const handleDashboardNavigation = () => {
    navigate("/NIRMainpage/NIRDashboard");
  };

  useEffect(() => {
    if (isLoading) return; // Wait until loading is false
    if (!user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  return (
    <Box sx={{ p: 4, fontFamily: "Arial, sans-serif" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <img
          src={hospitalLogo}
          alt="Hospital Logo"
          className="w-[10%] min-w-[100px] rounded-3xl"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h6">{user?.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {user?.role}
          </Typography>
          {user?.role?.toUpperCase() === "ASSISTENCIAL" && (
            <Typography variant="body2" color="textSecondary">
              {user?.specialty}
            </Typography>
          )}
        </Box>
        {/* <button
          onClick={() => navigate("/NIRMainpage/editNir")}
          className="cursor-pointer rounded-xl bg-green-300 !p-3 text-white hover:bg-green-400"
        >
          Editar seu cadastro
        </button> */}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <button
          onClick={handleDashboardNavigation}
          className="cursor-pointer rounded-xl bg-green-300 !p-3 text-white hover:bg-green-400"
        >
          Dashboard de pacientes
        </button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
      <button
        onClick={handleLogoutClick}
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
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4ade80")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#86efac")}
      >
        Sair
      </button>
      </Box>
    </Box>
  );
};

export default NIRMainpage;

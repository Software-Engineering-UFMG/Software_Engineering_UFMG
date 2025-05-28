import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import { Typography, Box, TextField, InputAdornment, List, ListItem, ListItemButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth } from "../../context/AuthContext";


export const Preceptor = () => {
  const { user, isLoading } = useAuth();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPreceptors, setFilteredPreceptors] = useState<string[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [selectedPreceptor, setSelectedPreceptor] = useState<string | null>(null);
  const { handleLogout: authLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await authLogout(); 
    navigate("/"); 
  };

  useEffect(() => {
    if (!user && !isLoading) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  // Debounced search effect
  useEffect(() => {
   
  },);

  const handlePreceptorSelect = (preceptor: string) => {
    setSelectedPreceptor(preceptor);
    setSearchTerm(preceptor);
    setFilteredPreceptors([]);
  };

  const handleContinue = () => {
    if (selectedPreceptor) {
      navigate("/preceptor/AssistencialDashboard", {
        state: { preceptorName: selectedPreceptor },
      });
    }
  };

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
          <Typography variant="h5">{user?.name}</Typography>
          <Typography variant="h6" color="textSecondary">
            {user?.specialty ? `${user.specialty} - ${user.role}` : user?.role}
          </Typography>
        </Box>
        <button
          onClick={() => navigate("/preceptor/editRegistration")}
          className="cursor-pointer rounded-xl bg-green-300 !p-3 text-white hover:bg-green-400"
        >
          Editar seu cadastro
        </button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4, position: "relative" }}>
        <TextField
          placeholder="Digite o nome do preceptor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: "50%" }}
          disabled={searchLoading}
        />
        {filteredPreceptors.length > 0 && (
          <List
            sx={{
              position: "absolute",
              top: "100%",
              width: "50%",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              zIndex: 10,
              maxHeight: "150px",
              overflowY: "auto",
            }}
          >
            {filteredPreceptors.map((preceptor, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handlePreceptorSelect(preceptor)}>
                  {preceptor}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
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

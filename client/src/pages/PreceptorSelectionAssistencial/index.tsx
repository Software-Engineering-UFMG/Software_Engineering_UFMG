import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import { Typography, Box, TextField, List, ListItem, ListItemButton, CircularProgress } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { getPreceptorsByName } from "../../services/api";


export const Preceptor = () => {
  const { user, isLoading } = useAuth();
  // States for the TextField-based search
  const [preceptorInput, setPreceptorInput] = useState<string>("");
  const [preceptorOptions, setPreceptorOptions] = useState<any[]>([]);
  const [allPreceptors, setAllPreceptors] = useState<any[]>([]);
  const [selectedPreceptor, setSelectedPreceptor] = useState<any | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);

  const { handleLogout: authLogout } = useAuth();
  const navigate = useNavigate();
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleLogoutClick = async () => {
    await authLogout(); 
    navigate("/"); 
  };

  useEffect(() => {
    if (!user && !isLoading) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  // Load all preceptors on component mount
  useEffect(() => {
    const loadPreceptors = async () => {
      try {
        const data = await getPreceptorsByName(""); // Get all preceptors
        setAllPreceptors(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error loading preceptors:", error);
        setAllPreceptors([]);
      }
    };
    loadPreceptors();
  }, []);

  // Debounced search effect for preceptorInput
  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    if (preceptorInput.trim() === "") {
      setPreceptorOptions([]);
      setSearchLoading(false); 
      return;
    }

    debounceTimeout.current = setTimeout(async () => {
      setSearchLoading(true);
      try {
        // Filter preceptors client-side by name (since we don't have name field in hospital DB)
        // We'll use 'usuario' field as the name identifier
        const filtered = allPreceptors.filter(preceptor => 
          preceptor.usuario && preceptor.usuario.toLowerCase().includes(preceptorInput.toLowerCase())
        );
        setPreceptorOptions(filtered);
      } catch (error) {
        console.error("Error filtering preceptors:", error);
        setPreceptorOptions([]);
      } finally {
        setSearchLoading(false);
      }
    }, 300);

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [preceptorInput, allPreceptors]);

  const handlePreceptorSelect = (preceptor: any) => {
    setSelectedPreceptor(preceptor);
    setPreceptorInput(preceptor.usuario || ''); // Use 'usuario' field as name
    setPreceptorOptions([]);
  };

  const handleContinue = () => {
    if (selectedPreceptor) {
      navigate("/preceptor/AssistencialDashboard", {
        state: { 
          preceptorName: selectedPreceptor.usuario, 
          preceptorId: selectedPreceptor.matricula // Use matricula as ID
        },
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
        {/* <button
          onClick={() => navigate("/preceptor/editRegistration")}
          className="cursor-pointer rounded-xl bg-green-300 !p-3 text-white hover:bg-green-400"
        >
          Editar seu cadastro
        </button> */}
      </Box>
      
      {/* TextField for preceptor selection */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4, position: "relative" }}>
        <Box sx={{ width: "50%", position: "relative" }}>
          <TextField
            label="Digite o nome do preceptor"
            variant="outlined"
            fullWidth
            value={preceptorInput}
            onChange={e => {
              const newValue = e.target.value;
              setPreceptorInput(newValue);
              // If user types something different from selected preceptor, deselect
              if (selectedPreceptor && newValue !== selectedPreceptor.usuario) {
                setSelectedPreceptor(null);
              }
            }}
            autoComplete="off"
            disabled={searchLoading}
            InputProps={{
              endAdornment: searchLoading ? <CircularProgress size={20} /> : null,
            }}
          />
          {preceptorOptions.length > 0 && !selectedPreceptor && (
            <List
              sx={{
                position: "absolute",
                top: "100%", // Position below the TextField
                left: 0,
                width: "100%",
                backgroundColor: "#f5f5f5",
                border: "1px solid #ccc",
                borderRadius: "4px",
                zIndex: 10,
                maxHeight: "150px",
                overflowY: "auto",
                padding: "8px 0",
                boxSizing: "border-box",
                marginTop: "4px", // Small gap from TextField
              }}
            >
              {preceptorOptions.map((preceptor: any) => (
                <ListItem key={preceptor.matricula} disablePadding>
                  <ListItemButton
                    onMouseDown={e => e.preventDefault()} // Prevents TextField blur before click
                    onClick={() => handlePreceptorSelect(preceptor)}
                  >
                    {preceptor.usuario}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
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

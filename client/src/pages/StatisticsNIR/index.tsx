import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router";

const spinningStyle: React.CSSProperties = {
  animation: "spin 1.5s linear infinite",
  fontSize: "4rem",
  color: "#007bff",
  marginBottom: "1rem"
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "70vh"
};

const textStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  color: "#333",
  fontWeight: 500
};

export default function StatisticsNIR() {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
      <SettingsIcon style={spinningStyle} />
      <div style={textStyle}>Esta página está em construção!</div>
      <div style={{ color: "#888", marginTop: "0.5rem" }}>
        Em breve, estatísticas incríveis para você.
      </div>
      <button
        style={{
          marginTop: "2rem",
          padding: "0.6rem 2rem",
          background: "#90ee90",
          color: "#222",
          border: "none",
          borderRadius: "6px",
          fontSize: "1rem",
          fontWeight: 500,
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
        }}
        onClick={() => navigate("/NIRMainpage/NIRDashboard")}
      >
        Voltar
      </button>
    </div>
  );
}

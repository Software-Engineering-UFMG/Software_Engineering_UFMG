import React from "react";
import { useNavigate } from "react-router";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";

export const Information = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center the image and button
        justifyContent: "start",
        height: "100vh",
        textAlign: "justify",
        padding: "20px",
      }}
    >
      <img
        src={hospitalLogo}
        className="rounded-3xl"
        alt="Hospital logo"
        style={{ width: "150px", marginBottom: "20px" }}
      />
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          fontSize: "18px", // Increase font size
          letterSpacing: "0.5px", // Add letter spacing
          lineHeight: "1.6", // Improve line spacing
        }}
      >
        <h1 style={{ fontSize: "24px", letterSpacing: "1px", textAlign: "center" }}>
          SAFER Patient Flow Bundle e Red2Green2 Days
        </h1>
        <br />
        <p>
          A gestão de leitos do Hospital das Clínicas da UFMG é realizada pela
          Unidade de Regulação Assistencial e um dos principais indicadores do
          serviço é o tempo de permanência hospitalar dos pacientes.
        </p>
        <br />
        <p>
          A média do tempo de internação hospitalar (
          <strong>length of stay, LOS</strong>) de pacientes é um indicador de
          eficiência dos serviços de saúde. Internações mais rápidas reduzem o
          custo do cuidado, transferindo o paciente para o tratamento
          ambulatorial, menos dispendioso.
        </p>
        <br />
        <p>
          A redução do LOS também aumenta a oferta de leitos, sem incremento de
          área física em hospitais. A maior disponibilização de leitos torna-se
          fundamental com o envelhecimento da população e aumento da carga de
          doenças crônicas.
        </p>
      </div>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#86efac",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          letterSpacing: "0.5px",
          color: "white",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4ade80")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#86efac")}
      >
        Voltar
      </button>
    </div>
  );
};

export default Information;

import React from "react";
import { useNavigate } from "react-router";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import { List } from "@mui/icons-material";

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
          <strong>SAFER Patient Flow Bundle e Red2Green Days:
            Estratégias para Otimização do Fluxo de Pacientes</strong>
        </h1>
        <br />
        <p>
          O <strong>SAFER Patient Flow Bundle</strong> é um conjunto de práticas recomendadas desenvolvido para aprimorar o fluxo de pacientes em unidades de internação adulta, visando reduzir atrasos e melhorar a eficiência hospitalar. Quando implementado de forma consistente, o SAFER pode diminuir o tempo de permanência hospitalar e aprimorar a segurança do paciente.
        </p>
        <br />
        <p style={{ marginBottom: "20px" }}>
          <strong>Componentes do SAFER:</strong>
        </p>

        <ol style={{
          listStyleType: "decimal",
          paddingLeft: "20px",
          marginBottom: "20px"
        }}>
          <li><strong>Revisão Sênior:</strong> Todos os pacientes devem ser avaliados por um profissional sênior antes do meio-dia, garantindo decisões informadas sobre o plano de tratamento e alta.​</li>

          <li><strong>Data e Critérios de Alta Esperados:</strong> Estabelecer uma data prevista de alta e critérios clínicos claros para sua realização, facilitando o planejamento e a coordenação do cuidado.</li>

          <li><strong>Fluxo Antecipado:</strong> Iniciar o atendimento aos pacientes o mais cedo possível após a admissão, promovendo um fluxo contínuo e eficiente.</li>

          <li><strong>Alta Antecipada:</strong> Esforçar-se para que os pacientes sejam liberados antes do meio-dia, liberando leitos mais cedo e permitindo a preparação adequada para a alta.</li>

          <li><strong>Revisão de Pacientes com Longa Permanência:</strong> Avaliar regularmente pacientes que estão internados por períodos prolongados para identificar e remover barreiras à alta.</li>
        </ol>
        <p>
          O <strong>Red2Green Days</strong> complementa o <strong>SAFER</strong>, sendo uma ferramenta visual que ajuda a identificar períodos de internação que não agregam valor ao paciente. Classificando os dias como "verdes" (quando o paciente recebe cuidados que avançam sua recuperação) ou "vermelhos" (quando há atrasos ou falta de progresso), a equipe pode identificar áreas que necessitam de atenção para melhorar o fluxo e a experiência do paciente.
        </p>
        <br />
        <p style={{ marginBottom: "20px" }}>
          <strong>Benefícios Comprovados:</strong>
        </p>
        <p style={{ marginBottom: "20px" }}>
          Estudos demonstram que a implementação conjunta do SAFER e do Red2Green pode levar a uma redução significativa no tempo de permanência hospitalar. Por exemplo, uma pesquisa em um hospital universitário no Brasil revelou que, após a adoção dessas estratégias, a mediana do tempo de internação caiu de 19 para 14,2 dias, sem aumento nas taxas de mortalidade ou readmissão.
        </p>
        <p>
          Para uma compreensão mais detalhada sobre a aplicação do Red2Green, confira o vídeo abaixo que ilustra sua implementação prática:
        </p>
      </div>

      {/* Vídeo do YouTube incorporado */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          borderRadius: "20px",
        }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RZJfvdCjGiQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          marginBottom: "20px",
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

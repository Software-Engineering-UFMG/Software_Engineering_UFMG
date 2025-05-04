import { useNavigate } from "react-router";

import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";

export const Information = () => {
  const navigate = useNavigate();

  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        minHeight: "100vh",
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
          fontSize: "18px",
          letterSpacing: "0.5px",
          lineHeight: "1.6",
        }}
      >
        <h1 style={{ fontSize: "24px", letterSpacing: "1px", textAlign: "center", marginBottom: "20px" }}>
          <strong>SAFER Patient Flow Bundle e Red2Green Days:
            Estratégias para Otimização do Fluxo de Pacientes</strong>
        </h1>
        <p style={{ marginBottom: "20px" }}>
          O Hospital das Clínicas da UFMG (HC-UFMG) tem implementado estratégias inovadoras para aprimorar a gestão de leitos e reduzir o tempo de permanência hospitalar dos pacientes. Uma dessas iniciativas é a adoção do método <strong>Red2Green Days</strong>, que, aliado ao <strong>SAFER Patient Flow Bundle</strong>, tem demonstrado resultados significativos na otimização do fluxo de pacientes.
        </p>
        <h2 style={{ fontSize: "20px", letterSpacing: "1px", textAlign: "center", marginBottom: "20px" }}>
          <strong>O que é o Red2Green Days?</strong>
        </h2>
        <p style={{ marginBottom: "20px" }}>
          O <strong>Red2Green Days</strong> é uma ferramenta visual projetada para identificar e minimizar períodos de internação que não agregam valor ao cuidado do paciente. Cada dia de internação é classificado como:
        </p>
        <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
          <li>
            <strong>Dia Verde:</strong> O paciente recebe cuidados que efetivamente contribuem para sua recuperação e avançam seu plano de tratamento.
          </li>
          <li>
            <strong>Dia Vermelho:</strong> Ocorrem atrasos ou interrupções no tratamento, sem progresso significativo na recuperação do paciente.
          </li>
        </ul>
        <p style={{ marginBottom: "20px" }}>
          Essa classificação diária permite que a equipe multidisciplinar identifique e aborde prontamente os fatores que contribuem para os "dias vermelhos", promovendo um fluxo de atendimento mais eficiente.
        </p>
        <h2 style={{ fontSize: "20px", letterSpacing: "1px", textAlign: "center", marginBottom: "20px" }}>
          <strong>Implementação no HC-UFMG</strong>
        </h2>
        <p style={{ marginBottom: "20px" }}>
          No HC-UFMG, a gestão de leitos é coordenada pela Unidade de Regulação Assistencial, que monitora indicadores-chave, como o tempo médio de internação hospitalar (<strong>Length of Stay - LOS</strong>). Reduzir o <strong>LOS</strong> é essencial para aumentar a disponibilidade de leitos sem a necessidade de expansão física, além de diminuir os custos associados ao cuidado hospitalar.
        </p>
        <p style={{ marginBottom: "20px" }}>
          A implementação conjunta do <strong>SAFER Patient Flow Bundle</strong> e do <strong>Red2Green Days</strong> no hospital tem como objetivo principal otimizar o fluxo de pacientes nas unidades de internação adulta. O <strong>SAFER</strong> é um conjunto de práticas recomendadas que inclui:
        </p>
        <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
          <li>
            <strong>Revisão Sênior:</strong> Avaliação diária dos pacientes por um profissional sênior antes do meio-dia, assegurando decisões informadas sobre o plano de tratamento e alta.
          </li>
          <li>
            <strong>Data e Critérios de Alta Esperados:</strong> Definição de uma data prevista de alta e critérios clínicos claros para sua realização, facilitando o planejamento e a coordenação do cuidado.
          </li>
          <li>
            <strong>Fluxo Antecipado:</strong> Início precoce do atendimento aos pacientes após a admissão, promovendo um fluxo contínuo e eficiente.
          </li>
          <li>
            <strong>Alta Antecipada:</strong> Esforço para que os pacientes sejam liberados antes do meio-dia, liberando leitos mais cedo e permitindo a preparação adequada para novas admissões.
          </li>
          <li>
            <strong>Revisão de Pacientes com Longa Permanência:</strong> Avaliação regular de pacientes internados por períodos prolongados para identificar e remover barreiras à alta.
          </li>
        </ul>
        <p style={{ marginBottom: "20px" }}>
          A combinação dessas estratégias tem mostrado resultados promissores. O estudo realizado na Unidade de Clínica Médica do HC-UFMG revelou que, após a adoção do <strong>SAFER</strong> e do <strong>Red2Green Days</strong>, a mediana do tempo de internação reduziu de 19 para 14,2 dias, sem aumento nas taxas de mortalidade ou readmissão.
        </p>
        <p style={{ marginBottom: "20px" }}>
          A redução do tempo de internação não apenas otimiza a utilização dos recursos hospitalares, mas também melhora a experiência do paciente, permitindo uma transição mais rápida para o cuidado ambulatorial, que é menos dispendioso e pode ser mais confortável para o paciente.
        </p>
        <p>
          Para uma compreensão mais detalhada sobre a aplicação do <strong>Red2Green Days</strong>, confira o vídeo abaixo que ilustra sua implementação prática:
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          borderRadius: "15px",
        }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YXvMj0IY5Ak"
          title="Webinar: Redução do tempo de internação de pacientes"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
        </iframe>
      </div>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "30px",
          marginBottom: "10px",
          padding: "10px 90px",
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

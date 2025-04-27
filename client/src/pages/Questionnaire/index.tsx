import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Typography, Button, TextField, RadioGroup, FormControlLabel, Radio, Checkbox } from "@mui/material";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import ebserh from "../../assets/images/ebserh.jpg";
import RED from "../../assets/images/RED.png";

export const QuestionnairePage = () => {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState<Record<string, any>>({});

    // Função para atualizar o estado das respostas
    const handleChange = (id: string, value: any) => {
        setAnswers((prev) => ({ ...prev, [id]: value }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = () => {
        console.log("Respostas:", answers);
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f0fff0", // Verde claro
                fontFamily: "'Roboto', sans-serif",
            }}
        >
            {/* Cabeçalho */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    p: 2,
                    borderBottom: "1px solid #4caf50", // Verde escuro
                }}
            >
                <img src={RED} alt="RED2GREEN" style={{ width: "10%", borderRadius: "8px" }} />
                <Typography variant="h4" color="#4caf50">
                    Questionário SAFER
                </Typography>
                <Box display="flex" gap={2}>
                    <img src={hospitalLogo} alt="Hospital Logo" style={{ width: "10%", borderRadius: "8px" }} />
                    <img src={ebserh} alt="EBSERH Logo" style={{ width: "10%", borderRadius: "8px" }} />
                </Box>
            </Box>

            {/* Conteúdo Principal */}
            <Box
                sx={{
                    flex: 1,
                    overflowY: "auto",
                    p: 4,
                    border: "1px solid #4caf50", // Verde escuro
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#fff",
                }}
            >
                {/* Pergunta 1: Data de Alta Prevista */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Qual é a data de alta prevista para o paciente?
                    </Typography>
                    <TextField
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={answers.dischargeDate || ""}
                        onChange={(e) => handleChange("dischargeDate", e.target.value)}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                backgroundColor: "#f9f9f9",
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#4caf50",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#4caf50",
                                },
                            },
                        }}
                    />
                </Box>

                {/* Pergunta 2: Critérios Clínicos */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Quais são os critérios clínicos para alta do paciente?
                    </Typography>
                    <TextField
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        value={answers.clinicalCriteria || ""}
                        onChange={(e) => handleChange("clinicalCriteria", e.target.value)}
                        placeholder="Digite os critérios clínicos"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                backgroundColor: "#f9f9f9",
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#4caf50",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#4caf50",
                                },
                            },
                        }}
                    />
                </Box>

                {/* Pergunta 3: Características do Paciente */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        O paciente possui alguma das características abaixo?
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {[
                            { value: "ostomy", label: "Alta prevista com ostomia" },
                            { value: "oxygen", label: "Alta com uso de oxigênio" },
                            { value: "drain", label: "Alta prevista com dreno" },
                            { value: "catheters", label: "Alta prevista com cateteres" },
                            { value: "seriousInjuries", label: "Alta prevista com lesões cutâneas extensas" },
                            { value: "streetSituation", label: "Situação de rua ou insuficiência familiar" },
                            { value: "extendedDiscussion", label: "Necessidade de discussão ampliada com interconsultores e equipe multidisciplinar" },
                        ].map((opt) => (
                            <label key={opt.value} className="inline-flex items-center cursor-pointer">
                                <Checkbox
                                    checked={Array.isArray(answers.characteristics) && answers.characteristics.includes(opt.value)}
                                    onChange={() => {
                                        const currentValue = Array.isArray(answers.characteristics) ? answers.characteristics : [];
                                        const isChecked = currentValue.includes(opt.value);
                                        const newValue = isChecked
                                            ? currentValue.filter((v) => v !== opt.value)
                                            : [...currentValue, opt.value];
                                        handleChange("characteristics", newValue);
                                    }}
                                    sx={{
                                        color: "#4caf50",
                                        "&.Mui-checked": {
                                            color: "#4caf50",
                                        },
                                    }}
                                />
                                <span>{opt.label}</span>
                            </label>
                        ))}
                    </Box>
                </Box>

                {/* Pergunta 4: Internação */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Se o paciente estivesse sendo admitido hoje no Pronto Socorro, a sua condição clínica determinaria internação?
                    </Typography>
                    <RadioGroup
                        row
                        value={answers.needsAdmission || ""}
                        onChange={(e) => handleChange("needsAdmission", e.target.value)}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Sim" />
                        <FormControlLabel value="no" control={<Radio />} label="Não" />
                    </RadioGroup>
                </Box>

                {/* Pergunta 5: Intervenções Ambulatoriais */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        As intervenções diagnósticas ou terapêuticas que o paciente receberá hoje poderiam ser realizadas ambulatorialmente?
                    </Typography>
                    <RadioGroup
                        row
                        value={answers.outpatient || ""}
                        onChange={(e) => handleChange("outpatient", e.target.value)}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Sim" />
                        <FormControlLabel value="no" control={<Radio />} label="Não" />
                    </RadioGroup>
                </Box>

                {/* Pergunta 6: Intervenção Efetiva */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        O paciente recebeu uma intervenção efetiva hoje para deixá-lo mais próximo à alta hospitalar?
                    </Typography>
                    <RadioGroup
                        row
                        value={answers.hospitalDischarge || ""}
                        onChange={(e) => handleChange("hospitalDischarge", e.target.value)}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Sim" />
                        <FormControlLabel value="no" control={<Radio />} label="Não" />
                    </RadioGroup>
                </Box>

                {/* Pergunta 7: Aguardando Algo */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        O paciente está aguardando por algo?
                    </Typography>
                    <RadioGroup
                        row
                        value={answers.waiting || ""}
                        onChange={(e) => {
                            handleChange("waiting", e.target.value);
                            if (e.target.value === "no") {
                                handleChange("waitingType", []);
                                handleChange("examDetails", []);
                            }
                        }}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Sim" />
                        <FormControlLabel value="no" control={<Radio />} label="Não" />
                    </RadioGroup>

                    {/* Campos Aninhados */}
                    {answers.waiting === "yes" && (
                        <Box sx={{ ml: 4, mt: 2 }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                O que o paciente está aguardando?
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                {[
                                    { value: "exam", label: "Exame" },
                                    { value: "invasiveProcedure", label: "Procedimento Invasivo" },
                                    { value: "familyOrganization", label: "Organização Familiar" },
                                    { value: "transfer", label: "Transferência e recursos externos" },
                                    { value: "service", label: "Atendimento ou decisão interconsulta" },
                                ].map((opt) => (
                                    <label key={opt.value} className="inline-flex items-center cursor-pointer">
                                        <Checkbox
                                            checked={Array.isArray(answers.waitingType) && answers.waitingType.includes(opt.value)}
                                            onChange={() => {
                                                const currentValue = Array.isArray(answers.waitingType) ? answers.waitingType : [];
                                                const isChecked = currentValue.includes(opt.value);
                                                const newValue = isChecked
                                                    ? currentValue.filter((v) => v !== opt.value)
                                                    : [...currentValue, opt.value];
                                                handleChange("waitingType", newValue);

                                                // Limpar campos aninhados se "Exame" for desmarcado
                                                if (opt.value === "exam" && isChecked) {
                                                    handleChange("examDetails", []);
                                                }
                                            }}
                                            sx={{
                                                color: "#4caf50",
                                                "&.Mui-checked": {
                                                    color: "#4caf50",
                                                },
                                            }}
                                        />
                                        <span>{opt.label}</span>
                                    </label>
                                ))}

                                {/* Detalhes do Exame */}
                                {Array.isArray(answers.waitingType) && answers.waitingType.includes("exam") && (
                                    <Box sx={{ ml: 4, mt: 2 }}>
                                        <Typography variant="h6" sx={{ mb: 2 }}>
                                            Tipos de exame:
                                        </Typography>
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                            {[
                                                { value: "lab", label: "Radiológico" },
                                                { value: "image", label: "Endoscópico" },
                                                { value: "image", label: "Cardiológico" },
                                                { value: "image", label: "Exame não padronizado" },
                                                { value: "others", label: "Outros" },
                                            ].map((opt) => (
                                                <label key={opt.value} className="inline-flex items-center cursor-pointer">
                                                    <Checkbox
                                                        checked={
                                                            Array.isArray(answers.examDetails) && answers.examDetails.includes(opt.value)
                                                        }
                                                        onChange={() => {
                                                            const currentValue = Array.isArray(answers.examDetails) ? answers.examDetails : [];
                                                            const isChecked = currentValue.includes(opt.value);
                                                            const newValue = isChecked
                                                                ? currentValue.filter((v) => v !== opt.value)
                                                                : [...currentValue, opt.value];
                                                            handleChange("examDetails", newValue);
                                                        }}
                                                        sx={{
                                                            color: "#4caf50",
                                                            "&.Mui-checked": {
                                                                color: "#4caf50",
                                                            },
                                                        }}
                                                    />
                                                    <span>{opt.label}</span>
                                                </label>
                                            ))}
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    )}
                </Box>

                {/* Rodapé com Botões */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 4,
                    }}
                >
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleSubmit}
                        sx={{
                            backgroundColor: "#4caf50",
                            "&:hover": {
                                backgroundColor: "#388e3c",
                            },
                        }}
                    >
                        Enviar
                    </Button>
                    <Button
                        variant="outlined"
                        color="success"
                        onClick={() => navigate(-1)}
                        sx={{
                            borderColor: "#4caf50",
                            "&:hover": {
                                backgroundColor: "#e8f5e9",
                            },
                        }}
                    >
                        Cancelar
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default QuestionnairePage;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Box, Typography, Button } from "@mui/material";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import { QuestionField, QuestionProps } from "../../components/Input/QuestionField";

export const QuestionnairePage = () => {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState<Record<string, any>>({});

    const handleChange = (id: string, value: any) => {
        setAnswers(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = () => {
        // Validação simples ou chamada de API
        console.log("Respostas:", answers);
    };

    const questions: Omit<QuestionProps, "value" | "onChange">[] = [
        { id: "dischargeDate", type: "date", label: "Qual é a data de alta prevista para o paciente?" },
        { id: "clinicalCriteria", type: "textarea", label: "Quais são os critérios clínicos para alta do paciente?" },
        {
            id: "characteristics",
            type: "checkbox",
            label: "O paciente possui alguma das características abaixo?",
            options: [
                { value: "ostomy", label: "Alta prevista com ostomia" },
                { value: "oxygen", label: "Alta com uso de oxigênio" },
                { value: "drain", label: "Alta prevista com dreno" },
                { value: "drain", label: "Alta prevista com dreno" },
                { value: "drain", label: "Alta prevista com dreno" },
                { value: "drain", label: "Alta prevista com dreno" },
                { value: "drain", label: "Alta prevista com dreno" },
            ]
        },
        {
            id: "needsAdmission",
            type: "radio",
            label: "Internação hoje no PS?",
            options: [
                { value: "yes", label: "Sim" },
                { value: "no", label: "Não" }
            ]
        },
        // … adicione as demais perguntas …
    ];

    return (

        <Box sx={{ p: 4 }}>
            {/* Cabeçalho com logo */}
            <div className="flex justify-between items-center mb-6">
                <img
                    src={hospitalLogo}
                    alt="Hospital Logo 1"
                    className="w-[5%] rounded-2xl"
                />
                <img
                    src={hospitalLogo}
                    alt="Hospital Logo 2"
                    className="w-[5%] rounded-2xl"
                />
                <img
                    src={hospitalLogo}
                    alt="Hospital Logo 3"
                    className="w-[5%] rounded-2xl"
                />
            </div>

            {/* Render das perguntas */}
            {questions.map(q => (
                <QuestionField
                    key={q.id}
                    {...q}
                    value={answers[q.id]}
                    onChange={handleChange}
                />
            ))}

            {/* Botões final */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6 }}>
                <Button variant="outlined" onClick={() => navigate(-1)}>
                    Cancelar
                </Button>
                <Button variant="contained" onClick={handleSubmit}>
                    Enviar
                </Button>
            </Box>
        </Box>
    );
};

export default QuestionnairePage;

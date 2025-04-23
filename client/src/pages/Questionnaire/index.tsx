import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Box, Typography, Button } from "@mui/material";
import red2greenLogo from "../../../assets/images/red2green.png";
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
        { id: "dischargeDate", type: "date", label: "Data de alta prevista" },
        { id: "clinicalCriteria", type: "textarea", label: "Critérios clínicos para alta" },
        {
            id: "characteristics",
            type: "checkbox",
            label: "O paciente possui alguma das características?",
            options: [
                { value: "ostomy", label: "Alta prevista com ostomia" },
                { value: "oxygen", label: "Alta com uso de oxigênio" },
                { value: "drain", label: "Alta prevista com dreno" },
                // … demais itens …
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
            <Box sx={{ textAlign: "center", mb: 4 }}>
                <img src={red2greenLogo} alt="Red2Green" className="w-32 mx-auto" />
            </Box>

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

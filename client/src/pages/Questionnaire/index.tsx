import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Box, Typography, Button, TextField, RadioGroup, FormControlLabel, Radio, Checkbox } from "@mui/material";
import hospitalLogo from "../../assets/images/hospital-das-clinicas.jpg";
import ebserh from "../../assets/images/ebserh.jpg";
import RED from "../../assets/images/RED.png";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { submitQuestionnaire as apiSubmitQuestionnaire, getTodaysQuestionnaire as apiGetTodaysQuestionnaire, getMe } from "../../services/api";
import { useAuth } from "../../context/AuthContext"; // already imported

export const QuestionnairePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const patientData = location.state?.patient;
    const [answers, setAnswers] = useState<Record<string, any>>({ characteristics: [] }); // Initialize characteristics as an empty array
    const [isDisabled, setIsDisabled] = useState(false);
    const [red2greenValue, setRed2greenValue] = useState("red"); // default to red
    const [submissionError, setSubmissionError] = useState<string | null>(null); // State for error messages
    const [errorField, setErrorField] = useState<string | null>(null); // Track which field caused the error
    const [submitAttempted, setSubmitAttempted] = useState(false); // Track if submit was attempted
    const { user } = useAuth(); // <-- get user from context

    useEffect(() => {
        // Check if user is logged in using /me endpoint
        const checkAuth = async () => {
            try {
                await getMe();
            } catch {
                navigate("/");
                return;
            }
            console.log("Patient Data:", patientData); // Debug log
            if (!patientData) {
                navigate(-1);
                return;
            }
            checkTodaysQuestionnaire();
        };
        checkAuth();
        // eslint-disable-next-line
    }, [patientData, navigate]);

    useEffect(() => {
        updateRedToGreenSign();
        // Only clear error message and field if user edits any field after a submission attempt with an error.
        // The submitAttempted flag remains true until a successful submission or explicit reset.
        if (submitAttempted && errorField) {
            setSubmissionError(null);
            setErrorField(null);
            // setSubmitAttempted(false); // <-- REMOVE THIS LINE
        }
    }, [answers]);

    const checkTodaysQuestionnaire = async () => {
        if (!patientData?.preceptorPacienteId) return;
        try {
            const res = await apiGetTodaysQuestionnaire(patientData.preceptorPacienteId);
            if (res.exists) setIsDisabled(true);
            else setIsDisabled(false);
        } catch (e) {
            // fallback: allow if error
            setIsDisabled(false);
        }
    };

    const handleChange = (id: string, value: any) => {
        setAnswers((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmitQuestionnaire = async () => {
        // Debug: log patientData
        console.log("patientData:", patientData);

        if (!patientData?.preceptorPacienteId) {
            setSubmissionError("ID do vínculo preceptor-paciente não encontrado.");
            return;
        }
        // Ensure waitingType and examDetails are always arrays
        const safeAnswers = {
            ...answers,
            waitingType: Array.isArray(answers.waitingType) ? answers.waitingType : [],
            examDetails: Array.isArray(answers.examDetails) ? answers.examDetails : [],
        };

        const mappedRed2GreenValue = red2greenValue === "red" ? "Vermelho" : "Verde";

        const payload = {
            preceptorPacienteId: patientData.preceptorPacienteId, // <-- use the relation ID
            answers: safeAnswers,
            red2green: mappedRed2GreenValue,
            dischargeConfirmed: answers.dischargeConfirmed === "yes",
        };
        console.log("Questionnaire payload:", payload);
        try {
            await apiSubmitQuestionnaire(payload);
            setIsDisabled(true);
            // Redirect based on user role
            if (user?.role === "NIR") {
                navigate("/NIRMainpage/NIRDashboard");
            } else if (user?.role === "Assistencial") {
                navigate("/preceptor/AssistencialDashboard");
            } else {
                navigate(-1); // fallback
            }
        } catch (e: any) {
            if (e.response?.status === 409) {
                setSubmissionError("O questionário já foi respondido hoje.");
                setIsDisabled(true);
            } else {
                setSubmissionError("Erro ao enviar o questionário.");
            }
        }
    };

    const validateAnswers = (): boolean => {
        const requiredFields = [
            "dischargeDate",
            "clinicalCriteria",
            "needsAdmission",
            "outpatient",
            "hospitalDischarge",
            "waiting",
            // "dischargeConfirmed", // <-- REMOVE THIS LINE
        ];

        for (const field of requiredFields) {
            if (
                answers[field] === undefined ||
                answers[field] === "" ||
                // Ensure characteristics (even if empty array) is not caught by this general check if it were in requiredFields
                (Array.isArray(answers[field]) && answers[field].length === 0 && field !== "characteristics") 
            ) {
                if (answers[field] === undefined || answers[field] === "") {
                    setSubmissionError(`O campo "${getFieldName(field)}" é obrigatório.`);
                    setErrorField(field);
                    return false;
                }
            }
        }

        // Validate dischargeDate is not in the past
        if (answers.dischargeDate) {
            const selected = dayjs(answers.dischargeDate);
            const today = dayjs().startOf('day');
            if (!selected.isValid()) {
                setSubmissionError("Selecione uma data de alta prevista válida.");
                setErrorField("dischargeDate");
                return false;
            }
            // Check if selected date is before today (past)
            if (selected.isBefore(today, 'day')) {
                setSubmissionError("A data de alta prevista para o paciente não pode ser no passado");
                setErrorField("dischargeDate");
                return false;
            }
        }

        // Ensure at least one characteristic is selected.
        // This check assumes 'characteristics' is always an array due to initialization.
        if (answers.characteristics.length === 0) { // MODIFIED CONDITION
            setSubmissionError("Pelo menos uma característica deve ser selecionada.");
            setErrorField("characteristics");
            return false;
        }

        if (answers.waiting === "yes") {
            if (!answers.waitingType || answers.waitingType.length === 0) {
                setSubmissionError("Se o paciente está aguardando, especifique o quê.");
                setErrorField("waitingType");
                return false;
            }
            if (answers.waitingType.includes("exam") && (!answers.examDetails || answers.examDetails.length === 0)) {
                setSubmissionError("Se o paciente aguarda por exame, especifique o tipo do exame.");
                setErrorField("examDetails");
                return false;
            }
        }

        setSubmissionError(null);
        setErrorField(null);
        return true;
    };
    
    // Helper function to get user-friendly field names
    const getFieldName = (fieldId: string): string => {
        const names: Record<string, string> = {
            dischargeDate: "Data de Alta Prevista",
            clinicalCriteria: "Critérios Clínicos para Alta",
            characteristics: "Características do Paciente",
            needsAdmission: "Condição Clínica para Internação",
            outpatient: "Intervenções Ambulatoriais",
            hospitalDischarge: "Intervenção Efetiva para Alta",
            waiting: "Paciente Aguardando Algo",
            dischargeConfirmed: "Alta Confirmada Hoje",
            waitingType: "Tipo de Espera",
            examDetails: "Detalhes do Exame"
        };
        return names[fieldId] || fieldId;
    };


    const handleSubmit = () => {
        setSubmitAttempted(true);
        if (validateAnswers()) {
            setSubmitAttempted(false);
            handleSubmitQuestionnaire();
        }
    };

    const updateRedToGreenSign = () => {
        // Only set to green if all required answers are filled and correct
        if (
            answers.needsAdmission === undefined ||
            answers.outpatient === undefined ||
            answers.hospitalDischarge === undefined ||
            answers.waiting === undefined
        ) {
            setRed2greenValue("red");
        } else if (answers.needsAdmission === "no") {
            setRed2greenValue("red");
        } else if (answers.outpatient === "yes") {
            setRed2greenValue("red");
        } else if (answers.hospitalDischarge === "no") {
            setRed2greenValue("red");
        } else if (answers.waiting === "yes") {
            setRed2greenValue("red");
        } else {
            setRed2greenValue("green");
        }
    };

    if (isDisabled) {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh",
                    padding: 4,
                }}
            >
                <Box
                    sx={{
                        maxWidth: 600,
                        width: "100%",
                        backgroundColor: "white",
                        borderRadius: 2,
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        padding: 4,
                        textAlign: "center",
                    }}
                >
                    <Box
                        sx={{
                            mb: 4,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={hospitalLogo} alt="Hospital Logo" style={{ width: "120px", borderRadius: "8px" }} />
                    </Box>

                    <Typography
                        variant="h5"
                        sx={{
                            color: "#2f855a",
                            fontWeight: "medium",
                            mb: 2,
                        }}
                    >
                        Questionário Indisponível
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "#4b5563",
                            mb: 4,
                        }}
                    >
                        O questionário já foi respondido hoje.
                        <br />
                        Estará disponível novamente amanhã.
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() => navigate(-1)}
                        sx={{
                            backgroundColor: "#86efac",
                            px: 4,
                            py: 1.5,
                            "&:hover": {
                                backgroundColor: "#4ade80",
                            },
                        }}
                    >
                        Voltar
                    </Button>
                </Box>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Cabeçalho */}
            <Box
                sx={{
                    backgroundColor: "white",
                    borderRadius: "0 0 8px 8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    mb: 4,
                }}
            >
                <img src={RED} alt="RED2GREEN" style={{ height: "60px", width: "auto", margin: "0 20px" }} />
                <img
                    src={hospitalLogo}
                    alt="Hospital Logo"
                    style={{ height: "80px", width: "auto", margin: "0 20px", borderRadius: "8px" }}
                />
                <img src={ebserh} alt="EBSERH Logo" style={{ height: "60px", width: "auto", margin: "0 20px" }} />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mb: 4,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: "#2f855a",
                        fontWeight: "bold",
                        textAlign: "center",
                        borderBottom: "3px solid #4ade80",
                        paddingBottom: 1,
                    }}
                >
                    Questionário SAFER
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: { xs: 'stretch', md: 'center' },
                    gap: 3,
                    mt: 4,
                    mb: 4,
                    p: 2,
                }}
            >
                {/* Campo 1: Nome do Paciente */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="h6" color="black">
                        Nome do Paciente:
                    </Typography>
                    <TextField
                        fullWidth
                        value={patientData?.name || ""}
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                backgroundColor: "#f9f9f9",
                            },
                        }}
                    />
                </Box>

                {/* Campo 2: Data de Nascimento */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="h6" color="black">
                        Data de Nascimento:
                    </Typography>
                    <TextField
                        fullWidth
                        value={patientData?.birthDate || ""}
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                backgroundColor: "#f9f9f9",
                            },
                        }}
                    />
                </Box>

                {/* Campo 3: Prontuário */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="h6" color="black">
                        Prontuário:
                    </Typography>
                    <TextField
                        fullWidth
                        value={patientData?.handBook || ""}
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                backgroundColor: "#f9f9f9",
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box
                sx={{
                    maxWidth: { xs: 400, sm: 600, md: 800 },
                    margin: "0 auto",
                    marginTop: 4,
                    marginBottom: 4,
                    padding: 2,
                    paddingBottom: 4,
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                }}
            >
                {/* Pergunta 1: Data de Alta Prevista */}
                <Box sx={{ mb: 4, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Qual é a data de alta prevista para o paciente?
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Data de Alta Prevista"
                            format="DD-MM-YYYY"
                            value={answers.dischargeDate ? dayjs(answers.dischargeDate) : null}
                            onChange={newVal => {
                                const iso = newVal?.toISOString() || '';
                                handleChange("dischargeDate", iso);
                            }}
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    margin: 'normal',
                                    // Remove error/helperText here, handle below for consistent error display
                                },
                            }}
                        />
                    </LocalizationProvider>
                    {submitAttempted && errorField === "dischargeDate" && (
                        <Typography color="error" sx={{ mt: 1 }}>
                            {submissionError}
                        </Typography>
                    )}
                </Box>
                {/* Pergunta 2: Critérios Clínicos */}
                <Box sx={{ mb: 4, p: 2 }}>
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
                    {submitAttempted && errorField === "clinicalCriteria" && (
                        <Typography color="error" sx={{ mt: 1 }}>
                            {submissionError}
                        </Typography>
                    )}
                </Box>
                {/* Pergunta 3: Características do Paciente */}
                <Box sx={{ mb: 4, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        O paciente possui alguma das características abaixo?
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            p: 3,
                            gap: 1,
                            border: "1px solid #4caf50",
                            borderRadius: "8px",
                        }}
                    >
                        {[
                            { value: "ostomy", label: "Alta prevista com ostomia" },
                            { value: "oxygen", label: "Alta prevista com uso de oxigênio" },
                            { value: "drain", label: "Alta prevista com dreno" },
                            { value: "catheters", label: "Alta prevista com cateteres" },
                            { value: "seriousInjuries", label: "Alta prevista com lesões cutâneas extensas" },
                            { value: "streetSituation", label: "Situação de rua ou insuficiência familiar" },
                            {
                                value: "extendedDiscussion",
                                label: "Necessidade de discussão ampliada com interconsultores e equipe multidisciplinar",
                            },
                        ].map((opt) => (
                            <label key={opt.value} className="inline-flex items-center cursor-pointer">
                                <Checkbox
                                    checked={
                                        Array.isArray(answers.characteristics) &&
                                        answers.characteristics.includes(opt.value)
                                    }
                                    onChange={() => {
                                        const currentValue = Array.isArray(answers.characteristics)
                                            ? answers.characteristics
                                            : [];
                                        const isChecked = currentValue.includes(opt.value);
                                        const newValue = isChecked
                                            ? currentValue.filter((v) => v !== opt.value)
                                            : [...currentValue, opt.value];
                                        handleChange("characteristics", newValue);
                                    }}
                                />
                                <span>{opt.label}</span>
                            </label>
                        ))}
                    </Box>
                    {submitAttempted && errorField === "characteristics" && (
                        <Typography color="error" sx={{ mt: 1 }}>
                            {submissionError}
                        </Typography>
                    )}
                </Box>
                {/* Pergunta 4: Internação */}
                <Box sx={{ mb: 4, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Se o paciente estivesse sendo admitido hoje no Pronto Socorro, a sua condição clínica determinaria internação?
                    </Typography>
                    <RadioGroup
                        row
                        value={answers.needsAdmission || ""}
                        onChange={(e) => handleChange("needsAdmission", e.target.value)}
                        sx={{
                            border: "1px solid #4caf50",
                            borderRadius: "8px",
                            pl: 2,
                            width: "25%",
                            justifyContent: "center",
                        }}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Sim" />
                        <FormControlLabel value="no" control={<Radio />} label="Não" />
                    </RadioGroup>
                    {submitAttempted && errorField === "needsAdmission" && (
                        <Typography color="error" sx={{ mt: 1 }}>
                            {submissionError}
                        </Typography>
                    )}
                </Box>
                {/* Pergunta 5: Intervenções Ambulatoriais */}
                <Box sx={{ mb: 4, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        As intervenções diagnósticas ou terapêuticas que o paciente receberá hoje poderiam ser realizadas ambulatorialmente?
                    </Typography>
                    <RadioGroup
                        row
                        value={answers.outpatient || ""}
                        onChange={(e) => handleChange("outpatient", e.target.value)}
                        sx={{
                            border: "1px solid #4caf50",
                            borderRadius: "8px",
                            pl: 2,
                            width: "25%",
                            justifyContent: "center",
                        }}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Sim" />
                        <FormControlLabel value="no" control={<Radio />} label="Não" />
                    </RadioGroup>
                    {submitAttempted && errorField === "outpatient" && (
                        <Typography color="error" sx={{ mt: 1 }}>
                            {submissionError}
                        </Typography>
                    )}
                </Box>
                {/* Pergunta 6: Intervenção Efetiva */}
                <Box sx={{ mb: 4, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        O paciente recebeu uma intervenção efetiva hoje para deixá-lo mais próximo à alta hospitalar?
                    </Typography>
                    <RadioGroup
                        row
                        value={answers.hospitalDischarge || ""}
                        onChange={(e) => handleChange("hospitalDischarge", e.target.value)}
                        sx={{
                            border: "1px solid #4caf50",
                            borderRadius: "8px",
                            pl: 2,
                            width: "25%",
                            justifyContent: "center",
                        }}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Sim" />
                        <FormControlLabel value="no" control={<Radio />} label="Não" />
                    </RadioGroup>
                    {submitAttempted && errorField === "hospitalDischarge" && (
                        <Typography color="error" sx={{ mt: 1 }}>
                            {submissionError}
                        </Typography>
                    )}
                </Box>
                {/* Pergunta 7: Aguardando Algo */}
                <Box sx={{ mb: 4, p: 2 }}>
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
                        sx={{
                            border: "1px solid #4caf50",
                            borderRadius: "8px",
                            pl: 2,
                            width: "25%",
                            justifyContent: "center",
                        }}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Sim" />
                        <FormControlLabel value="no" control={<Radio />} label="Não" />
                    </RadioGroup>
                    {submitAttempted && errorField === "waiting" && (
                        <Typography color="error" sx={{ mt: 1 }}>
                            {submissionError}
                        </Typography>
                    )}
                    {/* Campos Aninhados */}
                    {answers.waiting === "yes" && (
                        <Box sx={{ mb: 4, p: 2 }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                O que o paciente está aguardando?
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1,
                                    border: "1px solid #4caf50",
                                    borderRadius: "8px",
                                    p: 2,
                                }}
                            >
                                {[
                                    {
                                        value: "exam",
                                        label: "Exame",
                                        subItems: answers.waitingType?.includes("exam")
                                            ? [
                                                { value: "radiological", label: "Radiológico" },
                                                { value: "endoscopic", label: "Endoscópico" },
                                                { value: "cardiological", label: "Cardiológico" },
                                                { value: "nonStandardizedExam", label: "Exame não padronizado" },
                                                { value: "others", label: "Outros" },
                                            ]
                                            : [],
                                    },
                                    { value: "invasiveProcedure", label: "Procedimento Invasivo" },
                                    { value: "familyOrganization", label: "Organização Familiar" },
                                    { value: "externalTransferResources", label: "Transferência e recursos externos" },
                                    {
                                        value: "interconsultDecisionOrCare",
                                        label: "Atendimento ou decisão de interconsulta",
                                    },
                                ].map((opt) => (
                                    <Box key={opt.value}>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <Checkbox
                                                checked={
                                                    Array.isArray(answers.waitingType) &&
                                                    answers.waitingType.includes(opt.value)
                                                }
                                                onChange={() => {
                                                    const currentValue = Array.isArray(answers.waitingType)
                                                        ? answers.waitingType
                                                        : [];
                                                    const isChecked = currentValue.includes(opt.value);
                                                    const newValue = isChecked
                                                        ? currentValue.filter((v) => v !== opt.value)
                                                        : [...currentValue, opt.value];
                                                    handleChange("waitingType", newValue);
                                                    if (opt.value === "exam" && isChecked) {
                                                        handleChange("examDetails", []);
                                                    }
                                                }}
                                            />
                                            <span>{opt.label}</span>
                                        </label>
                                        {opt.subItems && opt.subItems.length > 0 && (
                                            <Box
                                                sx={{
                                                    pl: 4,
                                                    mt: 1,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 1,
                                                }}
                                            >
                                                {opt.subItems.map((subOpt) => (
                                                    <label
                                                        key={subOpt.value}
                                                        className="inline-flex items-center cursor-pointer"
                                                        style={{ marginLeft: "16px" }}
                                                    >
                                                        <Checkbox
                                                            checked={
                                                                Array.isArray(answers.examDetails) &&
                                                                answers.examDetails.includes(subOpt.value)
                                                            }
                                                            onChange={() => {
                                                                const currentValue = Array.isArray(answers.examDetails)
                                                                    ? answers.examDetails
                                                                    : [];
                                                                const isChecked = currentValue.includes(subOpt.value);
                                                                const newValue = isChecked
                                                                    ? currentValue.filter((v) => v !== subOpt.value)
                                                                    : [...currentValue, subOpt.value];
                                                                handleChange("examDetails", newValue);
                                                            }}
                                                        />
                                                        <span>{subOpt.label}</span>
                                                    </label>
                                                ))}
                                                {submitAttempted && errorField === "examDetails" && (
                                                    <Typography color="error" sx={{ mt: 1 }}>
                                                        {submissionError}
                                                    </Typography>
                                                )}
                                            </Box>
                                        )}
                                    </Box>
                                ))}
                                {/* Moved error display for waitingType inside this Box */}
                                {submitAttempted && errorField === "waitingType" && (
                                    <Typography color="error" sx={{ mt: 1 }}>
                                        {submissionError}
                                    </Typography>
                                )}
                            </Box>
                            {/* Removed error display for waitingType from here */}
                        </Box>
                    )}
                </Box>
                {/* Nova Pergunta: Alta do paciente foi confirmada? */}
                <Box sx={{ mb: 4, p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Alta confirmada no dia de hoje?
                    </Typography>
                    <RadioGroup
                        row
                        value={answers.dischargeConfirmed ?? "no"}
                        onChange={(e) => handleChange("dischargeConfirmed", e.target.value)}
                        sx={{
                            border: "1px solid #4caf50",
                            borderRadius: "8px",
                            pl: 2,
                            width: "25%",
                            justifyContent: "center",
                        }}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Sim" />
                        <FormControlLabel value="no" control={<Radio />} label="Não" />
                    </RadioGroup>
                    {/* REMOVE ERROR DISPLAY BLOCK FOR dischargeConfirmed */}
                    {/* {submitAttempted && errorField === "dischargeConfirmed" && (
                        <Typography color="error" sx={{ mt: 1 }}>
                            {submissionError}
                        </Typography>
                    )} */}
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        my: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 120,
                            height: 120,
                            borderRadius: "50%",
                            backgroundColor: red2greenValue, // always use red2greenValue
                            color: "#fff",
                            fontWeight: "bold",
                            boxShadow: 3,
                        }}
                    >
                        Red2Green
                    </Box>
                </Box>
                {/* Hidden input or value for red2green if you need to send it */}
                {/* <input type="hidden" value={red2greenValue} /> */}

                {/* Rodapé com Botões */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 4,
                        gap: 2, // Add some gap between buttons
                    }}
                >
                    <Button
                        variant="contained" // Changed from text to contained for better styling consistency
                        color="success"
                        onClick={handleSubmit}
                        sx={{
                            backgroundColor: "#86efac",
                            color: "white", // Ensure text is white for better contrast on green
                            "&:hover": {
                                backgroundColor: "#4ade80",
                            },
                            px: 4, // Increased horizontal padding
                            py: 1.5, // Increased vertical padding
                            fontSize: "1rem", // Increased font size
                        }}
                    >
                        Enviar
                    </Button>
                    <Button
                        variant="contained" // Changed from text to contained for better styling consistency
                        color="error" // Changed to error for a more distinct "cancel" action
                        onClick={() => navigate(-1)}
                        sx={{
                            backgroundColor: "#f87171", // A common red for cancel/error
                            color: "white", // Ensure text is white
                            "&:hover": {
                                backgroundColor: "#ef4444", // Darker red on hover
                            },
                            px: 4, // Increased horizontal padding
                            py: 1.5, // Increased vertical padding

                            fontSize: "1rem", // Increased font size
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
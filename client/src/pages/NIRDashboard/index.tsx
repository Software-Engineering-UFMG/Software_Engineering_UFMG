import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  TextField,
  Grid,
  Button,
  Modal,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import {
  Edit,
  Delete,
  NoteAdd,
  ToggleOn,
  ToggleOff,
  CalendarToday,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

import dayjs from "dayjs"; // For date calculations

function NIRDashboard() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  // Fetch patients from backend
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    if (!user && !isLoading) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    
   
  }, []);

  const [searchPreceptor, setSearchPreceptor] = useState("");
  const [searchPaciente, setSearchPaciente] = useState("");
  const [searchLeito, setSearchLeito] = useState("");
  const [red2GreenFilter, setRed2GreenFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [tempoInternacaoFilter, setTempoInternacaoFilter] = useState("");

  // Map backend patients to table rows
  console.log(patients); // <-- Add this line to inspect the data

  const mappedPatients = patients.map((patient) => {
    // Try to parse as ISO first, fallback to custom format if needed
    const parseDate = (dateStr: string | null | undefined) => {
      if (!dateStr) return "";
      const isoParsed = dayjs(dateStr);
      if (isoParsed.isValid()) return isoParsed.format("DD/MM/YYYY");
      // fallback for "YYYY-MM-DD HH:mm:ss"
      return dayjs(dateStr, "YYYY-MM-DD HH:mm:ss").format("DD/MM/YYYY");
    };

    const entranceDate = patient.entranceDate
      ? dayjs(patient.entranceDate)
      : null;
    const today = dayjs();
    const tempoInternacao = entranceDate && entranceDate.isValid()
      ? today.diff(entranceDate, "day")
      : 0;

    // Translate status from DB to Portuguese
    let statusPt = "";
    if (patient.status === "Active") statusPt = "Ativo";
    else if (patient.status === "Inactive") statusPt = "Inativo";
    else statusPt = patient.status || "";

    // Try all possible property names for birth date
    const rawBirthDate =
      patient.birthDate ||
      patient.birthdate ||
      patient.birth_date ||
      "";

    // Parse "YYYY-MM-DD HH:mm:ss" format and display as "DD/MM/YYYY"
    const dataNascimento = rawBirthDate
      ? dayjs(rawBirthDate, "YYYY-MM-DD HH:mm:ss").format("DD/MM/YYYY")
      : "";

    return {
      preceptor: patient.preceptor || "",
      paciente: patient.name,
      dataNascimento,
      leito: patient.hospitalbed || patient.hospitalBed || "",
      previsaoAlta: parseDate(patient.dischargingDate),
      tempoInternacao,
      red2Green: "Á preencher",
      status: statusPt,
    };
  });

  const filteredData = mappedPatients.filter(
    (row) =>
      row.preceptor.toLowerCase().includes(searchPreceptor.toLowerCase()) &&
      row.paciente.toLowerCase().includes(searchPaciente.toLowerCase()) &&
      row.leito.toLowerCase().includes(searchLeito.toLowerCase()) &&
      (red2GreenFilter === "" || row.red2Green === red2GreenFilter) &&
      (statusFilter === "" || row.status === statusFilter) &&
      (
        tempoInternacaoFilter === "" ||
        (tempoInternacaoFilter === "upTo6" && row.tempoInternacao <= 6) ||
        (tempoInternacaoFilter === "7to10" && row.tempoInternacao >= 7 && row.tempoInternacao <= 10) ||
        (tempoInternacaoFilter === "11to19" && row.tempoInternacao >= 11 && row.tempoInternacao <= 19) ||
        (tempoInternacaoFilter === "20plus" && row.tempoInternacao >= 20)
      )
  );

  interface TempoInternacaoColor {
    (tempoInternacao: number): string;
  }

  const getTempoInternacaoColor: TempoInternacaoColor = (tempoInternacao) => {
    if (tempoInternacao <= 6) return "blue";
    if (tempoInternacao >= 7 && tempoInternacao <= 10) return "yellow";
    if (tempoInternacao >= 11 && tempoInternacao <= 19) return "orange";
    return "purple";
  };

  const getRed2GreenColor = (red2Green: string) => {
    if (red2Green === "Vermelho") return "red";
    if (red2Green === "Verde") return "green";
    return "lightgray";
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preceptorInput, setPreceptorInput] = useState("");
  const [selectedPreceptor, setSelectedPreceptor] = useState<string | null>(null);

  const preceptorSuggestions = [
    "Mariana Gonçalves Fonseca Pena",
    "Clara Gonçalves Fonseca Pena",
    "João Silva",
    "Fernanda Costa",
    "Carlos Alberto",
    "Ana Paula Souza",
    "Ricardo Mendes",
    "Patrícia Oliveira",
    "Luiz Fernando",
    "Gabriela Santos",
    "Roberto Lima",
    "Juliana Pereira",
    "Marcelo Andrade",
    "Beatriz Carvalho",
    "Renato Figueiredo",
    "Camila Rocha",
    "Eduardo Nascimento",
    "Tatiana Ribeiro",
    "Fábio Almeida",
    "Vanessa Martins",
  ];

  const filteredSuggestions = preceptorInput
    ? preceptorSuggestions
      .filter((preceptor) =>
        preceptor.toLowerCase().includes(preceptorInput.toLowerCase())
      )
      .filter((preceptor) => preceptor !== preceptorInput)
    : [];

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPreceptorInput("");
    setSelectedPreceptor(null);
  };

  const handleChangePreceptor = () => {
    handleCloseModal();
  };

  const togglePatientStatus = (index: number) => {
    setPatients((prev) =>
      prev.map((patient, i) =>
        i === index
          ? {
            ...patient,
            status: patient.status === "Ativado" ? "Desativado" : "Ativado",
          }
          : patient
      )
    );
  };



  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addPreceptorInput, setAddPreceptorInput] = useState("");
  const [addSelectedPreceptor, setAddSelectedPreceptor] = useState<string | null>(null);
  const [addProntuarioInput, setAddProntuarioInput] = useState("");
  const [addSelectedProntuario, setAddSelectedProntuario] = useState<string | null>(null);

  const prontuarioSuggestions = [
    { prontuario: "123456", paciente: "Riquelme Batista Gomes da Silva" },
    { prontuario: "654321", paciente: "Oswaldo Martins" },
    { prontuario: "111222", paciente: "Ana Maria" },
    { prontuario: "333444", paciente: "Carlos Eduardo" },
    { prontuario: "555666", paciente: "Maria Clara" },
    { prontuario: "777888", paciente: "João Pedro" },
    { prontuario: "999000", paciente: "Fernanda Lima" },
    { prontuario: "121212", paciente: "Lucas Rocha" },
    { prontuario: "232323", paciente: "Patrícia Souza" },
    { prontuario: "343434", paciente: "Gabriela Santos" },
  ];

  const filteredAddPreceptorSuggestions = addPreceptorInput
    ? preceptorSuggestions
      .filter((preceptor) =>
        preceptor.toLowerCase().includes(addPreceptorInput.toLowerCase())
      )
      .filter((preceptor) => preceptor !== addPreceptorInput)
    : [];

  const filteredAddProntuarioSuggestions = addProntuarioInput
    ? prontuarioSuggestions
      .filter((item) =>
        item.prontuario.toLowerCase().includes(addProntuarioInput.toLowerCase())
      )
      .filter((item) => item.prontuario !== addProntuarioInput)
    : [];

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setAddPreceptorInput("");
    setAddSelectedPreceptor(null);
    setAddProntuarioInput("");
    setAddSelectedProntuario(null);
  };

  const handleAddPatient = () => {
    handleCloseAddModal();
  };

  return (
    <div style={{ padding: "16px" }}>
      <Typography variant="h4" gutterBottom>
        NIR Dashboard
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems="center"
        style={{ marginBottom: "16px" }}
      >
        <Grid item xs={3}>
          <TextField
            label="Buscar por Preceptor"
            variant="outlined"
            fullWidth
            value={searchPreceptor}
            onChange={(e) => setSearchPreceptor(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Buscar por Paciente"
            variant="outlined"
            fullWidth
            value={searchPaciente}
            onChange={(e) => setSearchPaciente(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Buscar por Leito"
            variant="outlined"
            fullWidth
            value={searchLeito}
            onChange={(e) => setSearchLeito(e.target.value)}
          />
        </Grid>
        <Grid item xs="auto">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#90ee90",
              color: "white",
              minWidth: "150px",
            }}
            onClick={handleOpenAddModal}
          >
            Incluir Paciente
          </Button>
        </Grid>
        <Grid item xs="auto">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#90ee90",
              color: "white",
              minWidth: "150px",
            }}
            onClick={() => navigate("/NIRMainpage/NIRDashboard/statisticsNIR")}
          >
            Painel de Estatística
          </Button>
        </Grid>
        <Grid item xs="auto">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#90ee90",
              color: "white",
              minWidth: "150px",
            }}
            onClick={() => navigate("/NIRMainpage")}
          >
            Voltar
          </Button>
        </Grid>
      </Grid>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "80vh",
          overflowY: "auto",
          width: "100%",
          minWidth: 900,
        }}
      >
        <Table stickyHeader sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              <TableCell>Preceptor</TableCell>
              <TableCell>Paciente</TableCell>
              <TableCell>Data de Nascimento</TableCell>
              <TableCell>Leito</TableCell>
              <TableCell>Previsão de Alta</TableCell>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center" }}>
                  Tempo de Internação
                  <FormControl size="small" sx={{ ml: 1, minWidth: 32 }}>
                    <Select
                      value={tempoInternacaoFilter}
                      onChange={(e) => setTempoInternacaoFilter(e.target.value)}
                      displayEmpty
                      inputProps={{ "aria-label": "Filtro Tempo de Internação" }}
                      sx={{ fontSize: "0.9rem", height: 32, minWidth: 32 }}
                      renderValue={() => <span>&#9660;</span>}
                    >
                      <MenuItem value="">Todos</MenuItem>
                      <MenuItem value="upTo6">Até 6 dias</MenuItem>
                      <MenuItem value="7to10">7 a 10 dias</MenuItem>
                      <MenuItem value="11to19">11 a 19 dias</MenuItem>
                      <MenuItem value="20plus">20 dias ou mais</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </TableCell>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center" }}>
                  Red2Green
                  <FormControl size="small" sx={{ ml: 1, minWidth: 32 }}>
                    <Select
                      value={red2GreenFilter}
                      onChange={(e) => setRed2GreenFilter(e.target.value)}
                      displayEmpty
                      inputProps={{ "aria-label": "Filtro Red2Green" }}
                      sx={{ fontSize: "0.9rem", height: 32, minWidth: 32 }}
                      renderValue={(selected) => {
                        if (!selected) return <span>&#9660;</span>;
                        return <span>&#9660;</span>;
                      }}
                    >
                      <MenuItem value="">Todos</MenuItem>
                      <MenuItem value="Vermelho">Vermelho</MenuItem>
                      <MenuItem value="Verde">Verde</MenuItem>
                      <MenuItem value="Á preencher">À preencher</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </TableCell>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center" }}>
                  Status
                  <FormControl size="small" sx={{ ml: 1, minWidth: 32 }}>
                    <Select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      displayEmpty
                      inputProps={{ "aria-label": "Filtro Status" }}
                      sx={{ fontSize: "0.9rem", height: 32, minWidth: 32 }}
                      renderValue={() => <span>&#9660;</span>}
                    >
                      <MenuItem value="">Todos</MenuItem>
                      <MenuItem value="Ativado">Ativado</MenuItem>
                      <MenuItem value="Desativado">Desativado</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.preceptor}</TableCell>
                <TableCell>{row.paciente}</TableCell>
                <TableCell>{row.dataNascimento}</TableCell>
                <TableCell>{row.leito}</TableCell>
                <TableCell>{row.previsaoAlta}</TableCell>
                <TableCell
                  style={{
                    backgroundColor: getTempoInternacaoColor(
                      row.tempoInternacao
                    ),
                    color: "white",
                  }}
                >
                  {row.tempoInternacao} dias
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: getRed2GreenColor(row.red2Green),
                    color: "white",
                  }}
                >
                  {row.red2Green}
                </TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  {row.status === "Ativo" ? (
                    <>
                      <IconButton
                        title="Desativar paciente"
                        onClick={() => togglePatientStatus(index)}
                      >
                        <ToggleOff style={{ color: "red" }} />
                      </IconButton>
                      <IconButton
                        title="Questionário"
                        onClick={() => {
                          const prontuario = prontuarioSuggestions.find(
                            (item) => item.paciente === row.paciente
                          )?.prontuario || "N/A";
                          console.log("Sending patient data:", {
                            name: row.paciente,
                            birthDate: row.dataNascimento,
                            handBook: prontuario
                          });
                          navigate("/preceptor/AssistencialDashboard/Questionnaire", {
                            state: {
                              patient: {
                                name: row.paciente,
                                birthDate: row.dataNascimento,
                                handBook: prontuario
                              }
                            }
                          });
                        }}
                      >
                        <NoteAdd style={{ color: "blue" }} />
                      </IconButton>
                      <IconButton
                        title="Deletar paciente"
                        onClick={() => { }}
                      >
                        <Delete style={{ color: "orange" }} />
                      </IconButton>
                      <IconButton
                        title="Mudar preceptor"
                        onClick={handleOpenModal}
                      >
                        <Edit style={{ color: "purple" }} />
                      </IconButton>
                      <IconButton
                        title="Cancelar alta"
                      >
                        <CalendarToday style={{ color: "teal" }} />
                      </IconButton>
                    </>
                  ) : (
                    <IconButton
                      title="Ativar paciente"
                      onClick={() => togglePatientStatus(index)}
                    >
                      <ToggleOn style={{ color: "green" }} />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography
              variant="h6"
              gutterBottom
              style={{ marginBottom: "16px" }}
            >
              Mudar Preceptor
            </Typography>
            <TextField
              label="Digite o nome do preceptor"
              variant="outlined"
              fullWidth
              value={preceptorInput}
              onChange={(e) => {
                const value = e.target.value;
                setPreceptorInput(value);
                if (preceptorSuggestions.includes(value)) {
                  setSelectedPreceptor(value);
                } else {
                  setSelectedPreceptor(null);
                }
              }}
              style={{ marginBottom: "16px" }}
            />
            {filteredSuggestions.length > 0 && (
              <List
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                  maxHeight: 150,
                  overflowY: "scroll",
                  border: "1px solid #ccc",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              >
                {filteredSuggestions.map((preceptor, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setSelectedPreceptor(preceptor);
                        setPreceptorInput(preceptor);
                      }}
                    >
                      <ListItemText primary={preceptor} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleChangePreceptor}
                disabled={!selectedPreceptor}
                sx={{
                  backgroundColor: "#90ee90",
                  color: "white",
                  "&:hover": { backgroundColor: "#76c776" },
                  height: "50px",
                }}
              >
                Mudar Preceptor
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleCloseModal}
                sx={{
                  backgroundColor: "#90ee90",
                  color: "white",
                  "&:hover": { backgroundColor: "#76c776" },
                  height: "50px",
                }}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal open={isAddModalOpen} onClose={handleCloseAddModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 400,
          }}
        >
          <div>
            <Typography
              variant="h6"
              gutterBottom
              style={{ marginBottom: "16px" }}
            >
              Incluir Paciente
            </Typography>
            <TextField
              label="Digite o nome do preceptor"
              variant="outlined"
              fullWidth
              value={addPreceptorInput}
              onChange={(e) => {
                const value = e.target.value;
                setAddPreceptorInput(value);
                if (preceptorSuggestions.includes(value)) {
                  setAddSelectedPreceptor(value);
                } else {
                  setAddSelectedPreceptor(null);
                }
              }}
              style={{ marginBottom: "16px" }}
            />
            {filteredAddPreceptorSuggestions.length > 0 && (
              <List
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                  maxHeight: 100,
                  overflowY: "scroll",
                  border: "1px solid #ccc",
                  padding: "8px",
                  boxSizing: "border-box",
                  marginBottom: "16px",
                }}
              >
                {filteredAddPreceptorSuggestions.map((preceptor, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setAddSelectedPreceptor(preceptor);
                        setAddPreceptorInput(preceptor);
                      }}
                    >
                      <ListItemText primary={preceptor} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
            <TextField
              label="Digite o prontuário do paciente"
              variant="outlined"
              fullWidth
              value={
                (() => {
                  const found = prontuarioSuggestions.find(
                    (item) => item.prontuario === addProntuarioInput
                  );
                  return found ? found.paciente : addProntuarioInput;
                })()
              }
              onChange={(e) => {
                const value = e.target.value;
                setAddProntuarioInput(value);
                const found = prontuarioSuggestions.find(
                  (item) => item.prontuario === value
                );
                if (found) {
                  setAddSelectedProntuario(found.prontuario);
                } else {
                  setAddSelectedProntuario(null);
                }
              }}
              style={{ marginBottom: "16px" }}
            />
            {filteredAddProntuarioSuggestions.length > 0 && (
              <List
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                  maxHeight: 100,
                  overflowY: "scroll",
                  border: "1px solid #ccc",
                  padding: "8px",
                  boxSizing: "border-box",
                  marginBottom: "16px",
                }}
              >
                {filteredAddProntuarioSuggestions.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setAddSelectedProntuario(item.prontuario);
                        setAddProntuarioInput(item.prontuario);
                      }}
                    >
                      <ListItemText
                        primary={item.paciente}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleAddPatient}
                disabled={!addSelectedPreceptor || !addSelectedProntuario}
                sx={{
                  backgroundColor: "#90ee90",
                  color: "white",
                  "&:hover": { backgroundColor: "#76c776" },
                  height: "50px",
                }}
              >
                Incluir Paciente
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleCloseAddModal}
                sx={{
                  backgroundColor: "#90ee90",
                  color: "white",
                  "&:hover": { backgroundColor: "#76c776" },
                  height: "50px",
                }}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default NIRDashboard;

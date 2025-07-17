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
  HighlightOff, // <-- add this import
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import {
  getPreceptorsByName,
  getPatientsByMedicalRecord,
  createPreceptorPaciente,
  getAllPreceptorPacienteWithDetails,
  updatePreceptorPacienteStatus, // <-- add this import
  deletePreceptorPaciente, // <-- add this import
  updatePreceptorPacientePreceptor,
  deleteAllQuestionnairesForRelation, // <-- add this import
} from "../../services/api";

import dayjs from "dayjs"; // For date calculations

function NIRDashboard() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  // Fetch patients from backend
  const [patients, setPatients] = useState<any[]>([]);

  // Extract fetch logic so it can be reused
  const fetchRelations = async () => {
    try {
      const data = await getAllPreceptorPacienteWithDetails();
      setPatients(data);
    } catch (error) {
      setPatients([]);
    }
  };

  useEffect(() => {
    if (!user && !isLoading) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    fetchRelations();
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
    // Debug: log patient object to inspect available fields
    console.log("Patient object:", patient);

    // Try to parse as ISO first, fallback to custom format if needed
    const parseDate = (dateStr: string | null | undefined) => {
      if (!dateStr) return "";
      const isoParsed = dayjs(dateStr);
      if (isoParsed.isValid()) return isoParsed.format("DD/MM/YYYY");
      // fallback for "YYYY-MM-DD HH:mm:ss"
      return dayjs(dateStr, "YYYY-MM-DD HH:mm:ss").format("DD/MM/YYYY");
    };

    // Always use entranceDate from API for tempoInternacao calculation
    let tempoInternacao = 0;
    if (patient.entranceDate) {
      const entrance = dayjs(patient.entranceDate);
      if (entrance.isValid()) {
        tempoInternacao = dayjs().diff(entrance, "day");
      }
    }

    // Translate status from DB to Portuguese
    let statusPt = "";
    if (patient.status === "Active" || patient.status === "Ativado")
      statusPt = "Ativado";
    else if (patient.status === "Inactive" || patient.status === "Desativado")
      statusPt = "Desativado";
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
      id: patient.id,
      preceptor: patient.preceptorName || "",
      paciente: patient.patientName || "",
      dataNascimento,
      leito: patient.hospitalbed || patient.hospitalBed || "",
      previsaoAlta: parseDate(patient.dischargingDate),
      tempoInternacao,
      red2Green: patient.red2green || "À preencher",
      status: statusPt,
      // Try all possible property names for medical record
      medicalRecord: patient.medicalRecord || patient.medicalrecord || patient.medical_record || "", // <--- add all possible variants
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

  // State for "Mudar Preceptor" modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preceptorInput, setPreceptorInput] = useState("");
  const [preceptorOptions, setPreceptorOptions] = useState<any[]>([]);
  const [selectedPreceptor, setSelectedPreceptor] = useState<any | null>(null);
  const [relationToEdit, setRelationToEdit] = useState<any | null>(null); // <-- store relation

  // Open modal and set relation to edit
  const handleOpenModal = (relation: any) => {
    setRelationToEdit(relation);
    setIsModalOpen(true);
    setPreceptorInput("");
    setPreceptorOptions([]);
    setSelectedPreceptor(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPreceptorInput("");
    setPreceptorOptions([]);
    setSelectedPreceptor(null);
    setRelationToEdit(null);
  };

  // Fetch preceptor suggestions as user types
  const handlePreceptorInput = async (value: string) => {
    setPreceptorInput(value);
    setSelectedPreceptor(null);
    if (value.trim() === "") {
      setPreceptorOptions([]);
      return;
    }
    try {
      const data = await getPreceptorsByName(value);
      setPreceptorOptions(Array.isArray(data) ? data : []);
    } catch {
      setPreceptorOptions([]);
    }
  };

  // Confirm changing preceptor
  const handleChangePreceptor = async () => {
    if (!relationToEdit || !selectedPreceptor) return;
    try {
      await updatePreceptorPacientePreceptor(relationToEdit.id, selectedPreceptor.id);
      fetchRelations();
    } catch (error) {
      console.error("Erro ao mudar preceptor:", error);
    }
    handleCloseModal();
  };

  const handleToggleStatus = async (patient: any) => {
    try {
      const newStatus = patient.status === "Ativado" ? "Desativado" : "Ativado";
      console.log("Toggling status for relation id:", patient.id, "to", newStatus);
      await updatePreceptorPacienteStatus(patient.id, newStatus);
      fetchRelations();
    } catch (error) {
      console.error("Erro ao alternar status:", error);
    }
  };

  // State for API-driven modal
  const [addPreceptorInput, setAddPreceptorInput] = useState("");
  const [addPreceptorOptions, setAddPreceptorOptions] = useState<any[]>([]);
  const [addSelectedPreceptor, setAddSelectedPreceptor] = useState<any | null>(null);

  const [addProntuarioInput, setAddProntuarioInput] = useState("");
  const [addPatientOptions, setAddPatientOptions] = useState<any[]>([]);
  const [addSelectedPatient, setAddSelectedPatient] = useState<any | null>(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  // Fetch preceptor suggestions as user types (use plural function)
  const handleAddPreceptorInput = async (value: string) => {
    setAddPreceptorInput(value);
    setAddSelectedPreceptor(null);
    if (value.trim() === "") {
      setAddPreceptorOptions([]);
      return;
    }
    try {
      const data = await getPreceptorsByName(value); // <-- use plural
      setAddPreceptorOptions(Array.isArray(data) ? data : []);
    } catch {
      setAddPreceptorOptions([]);
    }
  };

  // Fetch patient suggestions as user types (use plural function)
  const handleAddProntuarioInput = async (value: string) => {
    setAddProntuarioInput(value);
    setAddSelectedPatient(null);
    if (value.trim() === "") {
      setAddPatientOptions([]);
      return;
    }
    try {
      const data = await getPatientsByMedicalRecord(value); // <-- use plural
      setAddPatientOptions(Array.isArray(data) ? data : []);
    } catch {
      setAddPatientOptions([]);
    }
  };

  // Handle create relation
  const handleAddPatient = async () => {
    if (!addSelectedPreceptor || !addSelectedPatient) return;
    await createPreceptorPaciente({
      preceptorId: addSelectedPreceptor.id,
      medicalRecord: addSelectedPatient.medicalRecord,
      status: "Ativado",
      red2green: "À preencher",
    });
    setIsAddModalOpen(false);
    setAddPreceptorInput("");
    setAddPreceptorOptions([]);
    setAddSelectedPreceptor(null);
    setAddProntuarioInput("");
    setAddPatientOptions([]);
    setAddSelectedPatient(null);
    // Refresh patient list here
    fetchRelations();
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setAddPreceptorInput("");
    setAddPreceptorOptions([]);
    setAddSelectedPreceptor(null);
    setAddProntuarioInput("");
    setAddPatientOptions([]);
    setAddSelectedPatient(null);
  };

  // Dummy prontuarioSuggestions for questionnaire icon
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

  // State for delete confirmation modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [relationToDelete, setRelationToDelete] = useState<any>(null);

  // Open modal and set relation to delete
  const handleOpenDeleteModal = (relation: any) => {
    setRelationToDelete(relation);
    setDeleteModalOpen(true);
  };

  // Close modal and clear relation
  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setRelationToDelete(null);
  };

  // Confirm deletion
  const handleConfirmDelete = async () => {
    if (!relationToDelete) return;
    try {
      await deleteAllQuestionnairesForRelation(relationToDelete.id);
      await deletePreceptorPaciente(relationToDelete.id);
      fetchRelations();
    } catch (error) {
      // handle error if needed
    }
    handleCloseDeleteModal();
  };

  return (
    <div style={{ padding: "16px" }}>
      <Typography variant="h4" gutterBottom>
        Painel NIR
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
          maxHeight: 'calc(100vh - 250px)', // ensures table fits within viewport
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
                      <MenuItem value="À preencher">À preencher</MenuItem> {/* <-- fix accent here */}
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
                  {row.status === "Ativado" ? (
                    <>
                      <IconButton
                        title="Desativar paciente"
                        onClick={() => handleToggleStatus(row)}
                      >
                        <ToggleOn style={{ color: "green" }} />
                      </IconButton>
                      <IconButton
                        title="Questionário"
                        onClick={() => {
                          // Pass only the mapped medicalRecord, do not fallback to N/A
                          navigate("/NIRMainpage/NIRDashboard/Questionnaire", {
                            state: {
                              patient: {
                                name: row.paciente,
                                birthDate: row.dataNascimento,
                                handBook: row.medicalRecord, // <-- always use this
                                preceptorPacienteId: row.id
                              }
                            }
                          });
                        }}
                      >
                        <NoteAdd style={{ color: "blue" }} />
                      </IconButton>
                      <IconButton
                        title="Paciente falecido"
                        onClick={() => handleOpenDeleteModal(row)}
                      >
                        <HighlightOff style={{ color: "orange" }} />
                      </IconButton>
                      <IconButton
                        title="Mudar preceptor"
                        onClick={() => handleOpenModal(row)}
                      >
                        <Edit style={{ color: "purple" }} />
                      </IconButton>
                    </>
                  ) : (
                    <IconButton
                      title="Ativar paciente"
                      onClick={() => handleToggleStatus(row)}
                    >
                      <ToggleOff style={{ color: "red" }} />
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
              onChange={(e) => handlePreceptorInput(e.target.value)}
              style={{ marginBottom: "16px" }}
              autoComplete="off"
            />
            {preceptorOptions.length > 0 && !selectedPreceptor && (
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
                {preceptorOptions.map((preceptor: any) => (
                  <ListItem key={preceptor.id} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setSelectedPreceptor(preceptor);
                        setPreceptorInput(preceptor.name);
                      }}
                    >
                      <ListItemText primary={preceptor.name} />
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
            <Typography variant="h6" gutterBottom style={{ marginBottom: "16px" }}>
              Incluir Paciente
            </Typography>
            <TextField
              label="Digite o nome do preceptor"
              variant="outlined"
              fullWidth
              value={addPreceptorInput}
              onChange={e => handleAddPreceptorInput(e.target.value)}
              style={{ marginBottom: "16px" }}
              autoComplete="off"
            />
            {/* Show suggestions only if there are options and no preceptor is selected */}
            {addPreceptorOptions.length > 0 && !addSelectedPreceptor && (
              <List sx={{ backgroundColor: "#f5f5f5", borderRadius: 1, maxHeight: 100, overflowY: "scroll", border: "1px solid #ccc", padding: "8px", boxSizing: "border-box", marginBottom: "16px" }}>
                {addPreceptorOptions.map((preceptor: any) => (
                  <ListItem key={preceptor.id} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setAddSelectedPreceptor(preceptor);
                        setAddPreceptorInput(preceptor.name);
                        // Do NOT clear addPreceptorOptions here, so user can re-edit and see suggestions again
                      }}
                    >
                      <ListItemText primary={preceptor.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
            <TextField
              label="Digite o prontuário do paciente"
              variant="outlined"
              fullWidth
              value={addProntuarioInput}
              onChange={e => handleAddProntuarioInput(e.target.value)}
              style={{ marginBottom: "16px" }}
            />
            {/* Show suggestions only if there are options and no patient is selected */}
            {addPatientOptions.length > 0 && !addSelectedPatient && (
              <List sx={{ backgroundColor: "#f5f5f5", borderRadius: 1, maxHeight: 100, overflowY: "scroll", border: "1px solid #ccc", padding: "8px", boxSizing: "border-box", marginBottom: "16px" }}>
                {addPatientOptions.map((patient: any) => (
                  <ListItem key={patient.medicalRecord} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setAddSelectedPatient(patient);
                        setAddProntuarioInput(patient.medicalRecord);
                        // Do NOT clear addPatientOptions here, so user can re-edit and see suggestions again
                      }}
                    >
                      <ListItemText primary={patient.name} secondary={patient.medicalRecord} />
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
                disabled={!addSelectedPreceptor || !addSelectedPatient}
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

      {/* Delete confirmation modal */}
      <Modal open={deleteModalOpen} onClose={handleCloseDeleteModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Confirmar exclusão
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Tem certeza que deseja remover este paciente devido a óbito?
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleConfirmDelete}
                sx={{
                  backgroundColor: "#90ee90",
                  color: "white",
                  "&:hover": { backgroundColor: "#76c776" },
                  height: "45px",
                }}
              >
                Confirmar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleCloseDeleteModal}
                sx={{
                  backgroundColor: "#90ee90",
                  color: "white",
                  "&:hover": { backgroundColor: "#76c776" },
                  height: "45px",
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

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
  MenuItem,
  Select,
  FormControl,
  ListItemText, // <-- add this import
} from "@mui/material";
import {
  Edit,
  NoteAdd,
  ToggleOn,
  ToggleOff,
  HighlightOff,
  Refresh, // <-- add this import
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import {
  getPreceptorPacienteWithDetailsByPreceptorId,
  getPatientsByMedicalRecord,
  updatePreceptorPacienteStatus,
  deletePreceptorPaciente,
  updatePreceptorPacientePreceptor,
  getPreceptorsByName,
  createPreceptorPaciente, // <-- add this import
  deleteAllQuestionnairesForRelation, // <-- add this import
  getPatientDischargePrediction, // Add this import
} from "../../services/api";
import dayjs from "dayjs";

function AssistencialDashboard() {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Get preceptorId and preceptorName from navigation state
  const { preceptorId, preceptorName } = location.state || {};

  const [patients, setPatients] = useState<any[]>([]);
  const [searchPaciente, setSearchPaciente] = useState("");
  const [searchLeito, setSearchLeito] = useState("");
  const [red2GreenFilter, setRed2GreenFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [tempoInternacaoFilter, setTempoInternacaoFilter] = useState("");

  // State for "Mudar Preceptor" modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preceptorInput, setPreceptorInput] = useState("");
  const [preceptorOptions, setPreceptorOptions] = useState<any[]>([]);
  const [selectedPreceptor, setSelectedPreceptor] = useState<any | null>(null);
  const [relationToEdit, setRelationToEdit] = useState<any | null>(null);

  // State for "Incluir Paciente" modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addProntuarioInput, setAddProntuarioInput] = useState("");
  const [addPatientOptions, setAddPatientOptions] = useState<any[]>([]);
  const [addSelectedPatient, setAddSelectedPatient] = useState<any | null>(null);

  // Fetch only this preceptor's relations
  const fetchRelations = async () => {
    if (!preceptorId) return;
    try {
      const data = await getPreceptorPacienteWithDetailsByPreceptorId(preceptorId);
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
    // eslint-disable-next-line
  }, [preceptorId]);

  // Move parseDate function outside to be reusable
  const parseDate = (dateStr: string | null | undefined) => {
    if (!dateStr) return "";
    // If it's already in YYYY-MM-DD format, parse it directly
    if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
      const parsed = dayjs(dateStr, 'YYYY-MM-DD');
      return parsed.format("DD/MM/YYYY");
    }
    // Fallback for other formats
    const parsed = dayjs(dateStr);
    if (parsed.isValid()) {
      return parsed.format("DD/MM/YYYY");
    }
    return "";
  };

  // Map backend patients to table rows
  const mappedPatients = patients.map((patient) => {
    let tempoInternacao = 0;
    if (patient.entranceDate) {
      const entrance = dayjs(patient.entranceDate);
      if (entrance.isValid()) {
        tempoInternacao = dayjs().diff(entrance, "day");
      }
    }
    
    let statusPt = "";
    if (patient.status === "Active" || patient.status === "Ativado")
      statusPt = "Ativado";
    else if (patient.status === "Inactive" || patient.status === "Desativado")
      statusPt = "Desativado";
    else statusPt = patient.status || "";
    
    // Fix birth date parsing
    const dataNascimento = parseDate(patient.birthDate);
    
    return {
      id: patient.id,
      paciente: patient.patientName || "",
      dataNascimento,
      leito: patient.hospitalbed || patient.hospitalBed || "",
      medicalRecord: patient.medicalRecord || patient.patientMedicalRecord || "", 
      previsaoAlta: "Carregando...", // Initial value, will be updated
      tempoInternacao,
      red2Green: patient.red2green || "À preencher",
      status: statusPt,
    };
  });

  // Add effect to load discharge predictions
  useEffect(() => {
    const loadDischargePredictions = async () => {
      for (const patient of patients) {
        if (patient.medicalRecord) {
          try {
            const result = await getPatientDischargePrediction(patient.medicalRecord);
            // Update the patient object with the discharge prediction
            setPatients(prevPatients => 
              prevPatients.map(p => 
                p.medicalRecord === patient.medicalRecord 
                  ? { 
                      ...p, 
                      dischargePrediction: result.isHospitalized 
                        ? result.dischargePrediction 
                        : "Não está internado" // Always set this string when not hospitalized
                    }
                  : p
              )
            );
          } catch (error) {
            console.error(`Error loading discharge prediction for ${patient.medicalRecord}:`, error);
            // Set error state for this patient
            setPatients(prevPatients => 
              prevPatients.map(p => 
                p.medicalRecord === patient.medicalRecord 
                  ? { ...p, dischargePrediction: "Não está internado" }
                  : p
              )
            );
          }
        }
      }
    };

    if (patients.length > 0) {
      loadDischargePredictions();
    }
  }, [patients.length]); // Only run when patients are loaded

  // Update the mappedPatients to use the new discharge prediction
  const mappedPatientsWithPredictions = mappedPatients.map((patient, index) => {
    const originalPatient = patients[index];
    
    // Handle discharge prediction display
    let previsaoAlta = "Carregando..."; // Default loading state
    
    if (originalPatient?.dischargePrediction) {
      if (originalPatient.dischargePrediction === "Não está internado") {
        previsaoAlta = "Não está internado";
      } else {
        // It's a date, parse it
        previsaoAlta = parseDate(originalPatient.dischargePrediction);
      }
    }
    
    return {
      ...patient,
      previsaoAlta
    };
  });

  const filteredData = mappedPatientsWithPredictions.filter(
    (row) =>
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

  const getTempoInternacaoColor = (tempoInternacao: number) => {
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

  // State for delete confirmation modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [relationToDelete, setRelationToDelete] = useState<any>(null);

  const handleOpenDeleteModal = (relation: any) => {
    setRelationToDelete(relation);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setRelationToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (!relationToDelete) return;
    try {
      await deleteAllQuestionnairesForRelation(relationToDelete.id);
      await deletePreceptorPaciente(relationToDelete.id);
      fetchRelations();
    } catch (error) {
      // handle error
    }
    handleCloseDeleteModal();
  };

  const handleToggleStatus = async (patient: any) => {
    try {
      const newStatus = patient.status === "Ativado" ? "Desativado" : "Ativado";
      await updatePreceptorPacienteStatus(patient.id, newStatus);
      fetchRelations();
    } catch (error) {
      // handle error
    }
  };

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
      // handle error
    }
    handleCloseModal();
  };

  // Open modal
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
    setAddProntuarioInput("");
    setAddPatientOptions([]);
    setAddSelectedPatient(null);
  };

  // Close modal
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setAddProntuarioInput("");
    setAddPatientOptions([]);
    setAddSelectedPatient(null);
  };

  // Fetch patient suggestions as user types
  const handleAddProntuarioInput = async (value: string) => {
    setAddProntuarioInput(value);
    setAddSelectedPatient(null);
    if (value.trim() === "") {
      setAddPatientOptions([]);
      return;
    }
    try {
      const data = await getPatientsByMedicalRecord(value);
      setAddPatientOptions(Array.isArray(data) ? data : []);
    } catch {
      setAddPatientOptions([]);
    }
  };

  // Handle create relation
  const handleAddPatient = async () => {
    if (!addSelectedPatient || !preceptorId) return;
    await createPreceptorPaciente({
      preceptorId: preceptorId,
      medicalRecord: addSelectedPatient.medicalRecord,
      status: "Ativado",
      red2green: "À preencher",
    });
    handleCloseAddModal();
    fetchRelations();
  };

  // Handle manual refresh
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div style={{ padding: "16px" }}>
      <Typography variant="h4" gutterBottom>
        Painel Assistencial {preceptorName ? `- ${preceptorName}` : ""}
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems="center"
        style={{ marginBottom: "16px" }}
      >
        {/* ...existing filters... */}
        <Grid item xs={4}>
          <TextField
            label="Buscar por Paciente"
            variant="outlined"
            fullWidth
            value={searchPaciente}
            onChange={(e) => setSearchPaciente(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
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
            onClick={() => navigate("/preceptor/AssistencialDashboard/statisticsAssistencial", { state: { preceptorId, preceptorName } })}
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
            onClick={handleRefresh}
            startIcon={<Refresh />}
          >
            Atualizar
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
            onClick={() => navigate("/preceptor")}
          >
            Voltar
          </Button>
        </Grid>
      </Grid>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 'calc(100vh - 250px)',
          overflowY: "auto",
          width: "100%",
          minWidth: 900,
        }}
      >
        <Table stickyHeader sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              {/* No Preceptor column */}
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
                      <MenuItem value="À preencher">À preencher</MenuItem>
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
                          // Use the actual medicalRecord from the row data
                          navigate("/preceptor/AssistencialDashboard/Questionnaire", {
                            state: {
                              patient: {
                                name: row.paciente,
                                birthDate: row.dataNascimento,
                                handBook: row.medicalRecord, // Pass the actual medical record
                                preceptorPacienteId: row.id // Pass the PreceptorPaciente relation ID
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
      {/* Mudar Preceptor Modal */}
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
      {/* Incluir Paciente Modal */}
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
            minHeight: 300,
          }}
        >
          <div>
            <Typography variant="h6" gutterBottom style={{ marginBottom: "16px" }}>
              Incluir Paciente
            </Typography>
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
                disabled={!addSelectedPatient}
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

export default AssistencialDashboard;


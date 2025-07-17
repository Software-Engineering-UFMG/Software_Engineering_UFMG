import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Typography,
  Paper,
  TableContainer,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { Edit, Delete, ToggleOn, ToggleOff, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { getAllUsers } from "../../services/api";
import { updateUserById } from "../../services/api";
import { deleteUser } from "../../services/api";
import { getUserById } from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material";
import { createUser } from "../../services/api";

export const Dashboard = () => {
  const { handleLogout: authLogout } = useAuth();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    name: "",
    login: "",
    role: "",
    status: "",
  });
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [editUserData, setEditUserData] = useState<{
    name: string;
    username: string;
    birthdate: string;
    role: "NIR" | "Assistencial" | "Admin" | undefined;
    phone: string;
    password: string;
  }>({
    name: "",
    username: "",
    birthdate: "",
    role: undefined,
    phone: "",
    password: "",
  });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [changePassword, setChangePassword] = useState<boolean>(false);
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    username: false,
    birthdate: false,
    phone: false,
  });

  // New user creation popup state
  const [isNewUserPopupOpen, setIsNewUserPopupOpen] = useState(false);
  const [newUserFormData, setNewUserFormData] = useState({
    fullName: "",
    login: "",
    password: "",
    confirmPassword: "",
    userType: "",
    specialty: "",
  });
  const [newUserErrors, setNewUserErrors] = useState({
    fullName: false,
    login: false,
    loginExists: false,
    password: false,
    confirmPassword: false,
    userType: false,
    specialty: false,
  });
  const [isNewUserLoading, setIsNewUserLoading] = useState(false);

  const specialties = [
    "Clínica Médica",
    "Cardiologia",
    "Pediatria",
    "Gastroenterologia",
    "Estudante de Medicina",
  ];

  const handleNewUserChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'login' && newUserErrors.loginExists) {
      setNewUserErrors(prev => ({ ...prev, loginExists: false }));
    }

    setNewUserFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'userType' && value !== 'Assistencial' && { specialty: '' }),
    }));

    setNewUserErrors(prev => ({
      ...prev,
      [name]: false,
      ...(name === 'confirmPassword' && { confirmPassword: value !== newUserFormData.password }),
      ...(name === 'userType' && { userType: false }),
      ...(name === 'specialty' && { specialty: false }),
    }));
  };

  const handleNewUserSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setNewUserFormData(prev => ({ ...prev, [name]: value }));
    setNewUserErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleNewUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = {
      fullName: newUserFormData.fullName.trim() === '',
      login: newUserFormData.login.trim() === '',
      loginExists: false,
      password: newUserFormData.password.trim() === '',
      confirmPassword:
        newUserFormData.confirmPassword.trim() === '' ||
        newUserFormData.confirmPassword !== newUserFormData.password,
      userType: newUserFormData.userType.trim() === '',
      specialty:
        newUserFormData.userType === 'Assistencial' &&
        newUserFormData.specialty.trim() === '',
    };

    setNewUserErrors(validationErrors);
    if (Object.values(validationErrors).some(Boolean)) return;

    setIsNewUserLoading(true);
    try {
      await createUser({
        name: newUserFormData.fullName,
        username: newUserFormData.login,
        password: newUserFormData.confirmPassword,
        role: newUserFormData.userType as 'NIR' | 'Assistencial' | 'Admin',
        specialty: newUserFormData.specialty,
      });
      
      // Refresh users list
      const updatedUsers = await getAllUsers();
      setUsers(updatedUsers);
      
      // Close popup and reset form
      setIsNewUserPopupOpen(false);
      setNewUserFormData({
        fullName: "",
        login: "",
        password: "",
        confirmPassword: "",
        userType: "",
        specialty: "",
      });
      setNewUserErrors({
        fullName: false,
        login: false,
        loginExists: false,
        password: false,
        confirmPassword: false,
        userType: false,
        specialty: false,
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        setNewUserErrors(prev => ({ ...prev, loginExists: true }));
      }
    } finally {
      setIsNewUserLoading(false);
    }
  };

  const handleOpenEditModal = async (userId: number) => {
    try {
      const user = await getUserById(userId);
      setEditUserData({
        name: user.name || "",
        username: user.username || "",
        birthdate: user.birthDate ? dayjs(user.birthDate).toISOString() : "",
        role: user.role || undefined,
        phone: user.phone || "",
        password: "",
      });
      setEditUserId(userId);
      setEditModalOpen(true);
    } catch (error) {}
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setEditUserId(null);
    setEditUserData({
      name: "",
      username: "",
      birthdate: "",
      role: undefined,
      phone: "",
      password: "",
    });
    setChangePassword(false);
    setFieldErrors({
      name: false,
      username: false,
      birthdate: false,
      phone: false,
    });
    setPasswordError(null);
  };

  const handleEditUserSubmit = async () => {
    try {
      if (!editUserId || !editUserData.role) return;
      const errors = {
        name: !editUserData.name.trim(),
        username: false,
        birthdate: false,
        phone: false,
      };
      setFieldErrors(errors);
      if (Object.values(errors).some(Boolean)) {
        return; 
      }
      const updatedUserData: any = {
        name: editUserData.name,
        role: editUserData.role,
      };
      await updateUserById(editUserId, updatedUserData);
      const updatedUsers = await getAllUsers();
      setUsers(updatedUsers);
      handleCloseEditModal();
    } catch (error) {}
  };

  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await authLogout();
    navigate("/");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleToggleActive = async (userId: number) => {
    try {
      const userToUpdate = users.find((user) => user.id === userId);
      if (!userToUpdate) return;
      const updatedStatus =
        userToUpdate.status === "Active" ? "Inactive" : "Active";
      const updatedUserData = {
        ...userToUpdate,
        status: updatedStatus,
        birthDate: dayjs(userToUpdate.birthDate).format("DD/MM/YYYY"),
      };
      const updatedUser = await updateUserById(userId, updatedUserData);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, status: updatedUser.status } : user
        )
      );
    } catch (error) {}
  };

  const handleDeleteUser = async () => {
    try {
      if (deleteUserId === null) return;
      setLoadingDelete(true);
      await deleteUser(deleteUserId);
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== deleteUserId)
      );
      setDeleteUserId(null);
    } catch (error) {
    } finally {
      setLoadingDelete(false);
    }
  };

  const filteredUsers = users.filter((user) => {
    return (
      (user.name?.toLowerCase() || "").includes(filters.name.toLowerCase()) &&
      (user.username?.toLowerCase() || "").includes(
        filters.login.toLowerCase()
      ) &&
      (user.role?.toLowerCase() || "").includes(filters.role.toLowerCase()) &&
      (user.status?.toLowerCase() || "").includes(filters.status.toLowerCase())
    );
  });

  return (
    <div className="!p-10">
      <Typography variant="h4" gutterBottom>
        Painel Administrativo
      </Typography>
      
      <Button
        onClick={() => setIsNewUserPopupOpen(true)}
        variant="contained"
        sx={{ 
          mb: 2, 
          backgroundColor: '#86efac', 
          '&:hover': { backgroundColor: '#4ade80' } 
        }}
      >
        Cadastrar novo usuário
      </Button>

      <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
        <TextField
          label="Nome"
          variant="outlined"
          value={filters.name}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, name: e.target.value }))
          }
          fullWidth
          margin="dense"
        />
        
        <FormControl fullWidth variant="outlined" margin="dense">
          <InputLabel id="role-filter-label" htmlFor="role-select">
            Função
          </InputLabel>
          <Select
            labelId="role-filter-label"
            id="role-select"
            value={filters.role}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, role: e.target.value }))
            }
            label="Função"
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="NIR">NIR</MenuItem>
            <MenuItem value="Assistencial">Assistencial</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="dense">
          <InputLabel id="status-filter-label" htmlFor="status-select">
            Status
          </InputLabel>
          <Select
            labelId="status-filter-label"
            id="status-select"
            value={filters.status}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, status: e.target.value }))
            }
            label="Status"
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Active">Ativado</MenuItem>
            <MenuItem value="Inactive">Desativado</MenuItem>
          </Select>
        </FormControl>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: '70vh', 
            overflowY: 'auto',
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Login</TableCell>
                <TableCell>Função</TableCell>
                <TableCell>Especialidade</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    {user.role === "Assistencial" ? user.specialty : "N/A"}
                  </TableCell>
                  <TableCell>
                    {user.status === "Active" ? "Ativado" : "Desativado"}
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Editar usuário">
                      <IconButton
                        color="secondary"
                        onClick={() => handleOpenEditModal(user.id)}
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title={
                        user.status === "Active"
                          ? "Desativar usuário"
                          : "Ativar usuário"
                      }
                    >
                      <IconButton
                        color={user.status === "Active" ? "success" : "default"}
                        onClick={() => handleToggleActive(user.id)}
                      >
                        {user.status === "Active" ? (
                          <ToggleOn />
                        ) : (
                          <ToggleOff />
                        )}
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Deletar usuário">
                      <IconButton
                        color="error"
                        onClick={() => setDeleteUserId(user.id)}
                      >
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Dialog
        open={deleteUserId !== null}
        onClose={() => setDeleteUserId(null)}
      >
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza de que deseja excluir este usuário? Esta ação não pode
            ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDeleteUserId(null)}
            color="primary"
            sx={{
              fontSize: "16px",
              backgroundColor: "#86efac",
              "&:hover": { backgroundColor: "#4ade80" },
            }}
            disabled={loadingDelete}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleDeleteUser}
            color="error"
            sx={{
              fontSize: "16px",
              backgroundColor: "#86efac",
              "&:hover": { backgroundColor: "#4ade80" },
            }}
            disabled={loadingDelete}
          >
            {loadingDelete ? "Carregando" : "Excluir"}
          </Button>
        </DialogActions>
      </Dialog>
      <div>
      <Dialog open={editModalOpen} onClose={handleCloseEditModal}>
        <DialogTitle>Editar Usuário</DialogTitle>
        <DialogContent>
          <TextField
            label="Nome"
            fullWidth
            margin="dense"
            value={editUserData.name || ""}
            onChange={(e) => {
              setEditUserData((prev) => ({ ...prev, name: e.target.value }));
              if (e.target.value.trim()) {
                setFieldErrors((prev) => ({ ...prev, name: false }));
              }
            }}
            error={fieldErrors.name}
            helperText={fieldErrors.name ? "O nome não pode estar em branco." : ""}
          />
          
          <FormControl component="fieldset" fullWidth margin="dense">
            <Typography variant="subtitle1">Tipo de usuário</Typography>
            <RadioGroup
              name="role"
              value={editUserData.role || ""}
              onChange={(e) => {
                setEditUserData((prev) => ({ ...prev, role: e.target.value as "NIR" | "Assistencial" | "Admin" }));
              }}
            >
              <FormControlLabel value="NIR" control={<Radio />} label="NIR" />
              <FormControlLabel value="Assistencial" control={<Radio />} label="Assistencial" />
              <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseEditModal}
            sx={{
              fontSize: "16px",
              backgroundColor: "#86efac",
              "&:hover": { backgroundColor: "#4ade80" },
            }}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleEditUserSubmit}
            sx={{
              fontSize: "16px",
              backgroundColor: "#86efac",
              "&:hover": { backgroundColor: "#4ade80" },
            }}
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
      </div>

      {/* New User Creation Pop-up Dialog */}
      <Dialog open={isNewUserPopupOpen} onClose={() => setIsNewUserPopupOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Cadastrar novo usuário</DialogTitle>
        <DialogContent>
          <form onSubmit={handleNewUserSubmit}>
            <TextField
              fullWidth
              label="Nome completo"
              name="fullName"
              value={newUserFormData.fullName}
              onChange={handleNewUserChange}
              margin="normal"
              error={newUserErrors.fullName}
              helperText={newUserErrors.fullName && 'Este campo não pode ficar vazio'}
            />

            <TextField
              fullWidth
              label="Login"
              name="login"
              value={newUserFormData.login}
              onChange={handleNewUserChange}
              margin="normal"
              error={newUserErrors.login || newUserErrors.loginExists}
              helperText={
                newUserErrors.login
                  ? 'Este campo não pode ficar vazio'
                  : newUserErrors.loginExists
                    ? 'Este login já está em uso'
                    : ''
              }
            />

            <TextField
              fullWidth
              label="Senha"
              name="password"
              type="password"
              value={newUserFormData.password}
              onChange={handleNewUserChange}
              margin="normal"
              error={newUserErrors.password}
              helperText={newUserErrors.password && 'Este campo não pode ficar vazio'}
            />

            

            <FormControl
              component="fieldset"
              margin="normal"
              error={newUserErrors.userType}
            >
              <Typography variant="subtitle1">Tipo de usuário</Typography>
              <RadioGroup
                name="userType"
                value={newUserFormData.userType}
                onChange={handleNewUserChange}
              >
                <FormControlLabel value="NIR" control={<Radio />} label="NIR" />
                <FormControlLabel value="Assistencial" control={<Radio />} label="Assistencial" />
                <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
              </RadioGroup>
              {newUserErrors.userType && (
                <Typography variant="caption" color="error">
                  Pelo menos uma opção deve ser selecionada
                </Typography>
              )}
            </FormControl>

            {newUserFormData.userType === "Assistencial" && (
              <FormControl fullWidth margin="normal" error={newUserErrors.specialty}>
                <InputLabel id="new-user-specialty-label">Especialidade</InputLabel>
                <Select
                  labelId="new-user-specialty-label"
                  id="new-user-specialty-select"
                  name="specialty"
                  value={newUserFormData.specialty}
                  onChange={handleNewUserSelectChange}
                  label="Especialidade"
                >
                  {specialties.map(s => (
                    <MenuItem key={s} value={s}>
                      {s}
                    </MenuItem>
                  ))}
                </Select>
                {newUserErrors.specialty && (
                  <FormHelperText>Este campo não pode ficar vazio</FormHelperText>
                )}
              </FormControl>
            )}
          </form>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setIsNewUserPopupOpen(false)}
            sx={{ backgroundColor: '#86efac', '&:hover': { backgroundColor: '#4ade80' } }}
          >
            Cancelar
          </Button>
          <Button 
            onClick={handleNewUserSubmit}
            variant="contained"
            disabled={isNewUserLoading}
            sx={{ backgroundColor: '#86efac', '&:hover': { backgroundColor: '#4ade80' } }}
          >
            {isNewUserLoading ? 'CARREGANDO...' : 'Cadastrar'}
          </Button>
        </DialogActions>
      </Dialog>

      <button
        onClick={handleLogoutClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#86efac",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4ade80")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#86efac")}
      >
        Sair
      </button>
    </div>
  );
};

export default Dashboard;
                    
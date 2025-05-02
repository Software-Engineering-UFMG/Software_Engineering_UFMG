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
import { updateUser } from "../../services/api";
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
} from "@mui/material";

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
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
        username: !editUserData.username.trim() || editUserData.username.length < 4,
        birthdate: !editUserData.birthdate.trim(),
        phone: !editUserData.phone.trim() || !/^\(\d{2}\)\d{4,5}-\d{4}$/.test(editUserData.phone),
      };
      setFieldErrors(errors);
      if (Object.values(errors).some(Boolean)) {
        return; 
      }
      if (changePassword) {
        if (!editUserData.password || editUserData.password.trim() === "") {
          setPasswordError("A senha não pode estar em branco.");
          return;
        }
        if (editUserData.password.length < 6) {
          setPasswordError("A senha deve ter pelo menos 6 caracteres.");
          return;
        }
      }
      setPasswordError(null);
      const updatedUserData: any = {
        name: editUserData.name,
        birthDate: new Date(editUserData.birthdate).toISOString(),
        phone: editUserData.phone,
        username: editUserData.username,
        role: editUserData.role,
      };
      if (changePassword) {
        updatedUserData.password = editUserData.password;
      }
      await updateUser(editUserId, updatedUserData);
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
      const updatedUserData = { ...userToUpdate, status: updatedStatus };
      const updatedUser = await updateUser(userId, updatedUserData);
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
        <TextField
          label="Login"
          variant="outlined"
          value={filters.login}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, login: e.target.value }))
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
          <TextField
            label="Login"
            fullWidth
            margin="dense"
            value={editUserData.username || ""}
            onChange={(e) => {
              setEditUserData((prev) => ({ ...prev, username: e.target.value }));
              if (e.target.value.trim() && e.target.value.length >= 4) {
                setFieldErrors((prev) => ({ ...prev, username: false }));
              }
            }}
            error={fieldErrors.username}
            helperText={
              fieldErrors.username
                ? "O login deve ter pelo menos 4 caracteres e não pode estar em branco."
                : ""
            }
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Data de Nascimento"
              value={editUserData.birthdate ? dayjs(editUserData.birthdate) : null}
              onChange={(newVal) => {
                const iso = newVal?.toISOString() || "";
                if (newVal && newVal.isAfter(dayjs())) {
                  setFieldErrors((prev) => ({ ...prev, birthdate: true }));
                  return;
                }
                setEditUserData((prev) => ({ ...prev, birthdate: iso }));
                if (iso) {
                  setFieldErrors((prev) => ({ ...prev, birthdate: false }));
                }
              }}
              format="DD/MM/YYYY"
              maxDate={dayjs()}
              slotProps={{
                textField: {
                  fullWidth: true,
                  margin: "dense",
                  error: fieldErrors.birthdate,
                  helperText: fieldErrors.birthdate
                    ? "A data de nascimento não pode estar em branco ou no futuro."
                    : "",
                  onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
                    const typedDate = dayjs(e.target.value, "DD/MM/YYYY", true);
                    if (typedDate.isValid() && typedDate.isAfter(dayjs())) {
                      setFieldErrors((prev) => ({ ...prev, birthdate: true }));
                    }
                  },
                },
              }}
            />
          </LocalizationProvider>
          <TextField
            label="Função"
            fullWidth
            margin="dense"
            value={editUserData.role}
            disabled
          />
          <TextField
            label="Telefone"
            fullWidth
            margin="dense"
            value={editUserData.phone || ""}
            onChange={(e) => {
              const raw = e.target.value.replace(/\D/g, '');
              let formatted = raw;
              if (raw.length <= 2) formatted = `(${raw}`;
              else if (raw.length <= 7) formatted = `(${raw.slice(0, 2)})${raw.slice(2)}`;
              else formatted = `(${raw.slice(0, 2)})${raw.slice(2, 7)}-${raw.slice(7, 11)}`;
              setEditUserData((prev) => ({ ...prev, phone: formatted }));
              if (/^\(\d{2}\)\d{4,5}-\d{4}$/.test(formatted)) {
                setFieldErrors((prev) => ({ ...prev, phone: false }));
              }
            }}
            error={fieldErrors.phone}
            helperText={
              fieldErrors.phone
                ? "O telefone deve estar no formato (XX)XXXXX-XXXX e não pode estar em branco."
                : ""
            }
          />
          <FormControl component="fieldset" fullWidth margin="dense">
            <Typography variant="subtitle1">Alterar Senha?</Typography>
            <RadioGroup
              row
              value={changePassword ? "yes" : "no"}
              onChange={(e) => setChangePassword(e.target.value === "yes")}
            >
              <FormControlLabel value="no" control={<Radio />} label="Não" />
              <FormControlLabel value="yes" control={<Radio />} label="Sim" />
            </RadioGroup>
          </FormControl>
          {changePassword && (
            <TextField
              label="Nova Senha"
              fullWidth
              margin="dense"
              type={showPassword ? "text" : "password"}
              value={editUserData.password}
              onChange={(e) => {
                const newPassword = e.target.value;
                setEditUserData((prev) => ({ ...prev, password: newPassword }));
                if (newPassword.length > 0 && newPassword.length < 6) {
                  setPasswordError("A senha deve ter pelo menos 6 caracteres.");
                } else {
                  setPasswordError(null);
                }
              }}
              error={!!passwordError}
              helperText={passwordError}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          )}
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
            disabled={changePassword && !!passwordError}
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
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

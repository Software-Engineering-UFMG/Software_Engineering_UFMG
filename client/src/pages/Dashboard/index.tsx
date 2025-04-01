import React, { useState } from "react";
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
    TextField,
    Grid,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import { Edit, Delete, ToggleOn, ToggleOff, NoteAdd } from "@mui/icons-material";
import { useNavigate } from "react-router";

export const Dashboard = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Usuário Admin", login: "admin", role: "Admin", active: true },
        { id: 2, name: "Usuário NIR", login: "nir", role: "NIR", active: true },
        { id: 3, name: "Usuário Assistencial", login: "assistencial", role: "Assistencial", specialty: "Cardiologia", active: false },
    ]);
    const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
    const [editUser, setEditUser] = useState<any | null>(null); // State for the user being edited
    const [filters, setFilters] = useState({
        name: "",
        login: "",
        role: "",
        specialty: "",
    });
    const navigate = useNavigate();

    const handleEditUser = (userId: number) => {
        navigate(`/dashboard/editUser/${userId}`); // Navigate to the EditUser page
    };

    const handleSaveUser = () => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === editUser.id ? editUser : user
            )
        );
        setEditUser(null); // Close the modal after saving
    };

    const handleToggleActive = (userId: number) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId ? { ...user, active: !user.active } : user
            )
        );
    };

    const handleDeleteUser = () => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== deleteUserId));
        setDeleteUserId(null);
    };

    const handleFilterChange = (field: string, value: string) => {
        setFilters((prevFilters) => ({ ...prevFilters, [field]: value }));
    };

    const handleLogout = () => {
        console.log("Admin logged out");
        navigate("/"); // Redirect to the login page
    };

    const filteredUsers = users.filter((user) => {
        return (
            user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
            user.login.toLowerCase().includes(filters.login.toLowerCase()) &&
            user.role.toLowerCase().includes(filters.role.toLowerCase()) &&
            (user.specialty?.toLowerCase() || "").includes(filters.specialty.toLowerCase())
        );
    });

    return (
        <div className="!p-10">
            <Typography variant="h4" gutterBottom>
                Painel Administrativo
            </Typography>

            {/* Filtros e Botão Adicionar Usuário */}
            <Grid container spacing={2} alignItems="center" style={{ marginBottom: "16px" }}>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        label="Pesquisar por Nome"
                        variant="outlined"
                        fullWidth
                        value={filters.name}
                        onChange={(e) => handleFilterChange("name", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        label="Pesquisar por Login"
                        variant="outlined"
                        fullWidth
                        value={filters.login}
                        onChange={(e) => handleFilterChange("login", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth>
                        <InputLabel id="role-filter-label">Pesquisar por Função</InputLabel>
                        <Select
                            labelId="role-filter-label"
                            value={filters.role}
                            onChange={(e) => handleFilterChange("role", e.target.value)}
                            label="Pesquisar por Função"
                        >
                            <MenuItem value="">Todos</MenuItem>
                            <MenuItem value="Administrador">Administrador</MenuItem>
                            <MenuItem value="NIR">NIR</MenuItem>
                            <MenuItem value="Assistencial">Assistencial</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        label="Pesquisar por Especialidade"
                        variant="outlined"
                        fullWidth
                        value={filters.specialty}
                        onChange={(e) => handleFilterChange("specialty", e.target.value)}
                    />
                </Grid>
                <Grid item xs={14} className="flex justify-end">
                    <Button
                        
                        variant="contained"
                        color="primary"
                        size="large" // Increase the button size
                        startIcon={<NoteAdd />}
                        sx={{ padding: "12px 24px", fontSize: "16px", backgroundColor: "#86efac", "&:hover": { backgroundColor: "#4ade80" } }} // Custom styles for larger button
                        onClick={() => navigate("/dashboard/addUserAsAdmin")}
                    >
                        Adicionar Usuário
                    </Button>
                </Grid>
            </Grid>

            {/* Tabela de Usuários */}
            <TableContainer component={Paper}>
                <Table>
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
                                <TableCell>{user.login}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    {user.role === "Assistencial" ? user.specialty : "N/A"}
                                </TableCell>
                                <TableCell>
                                    {user.active ? "Ativado" : "Desativado"}
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        color="secondary"
                                        onClick={() => handleEditUser(user.id)}
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton
                                        color={user.active ? "success" : "default"}
                                        onClick={() => handleToggleActive(user.id)}
                                    >
                                        {user.active ? <ToggleOn /> : <ToggleOff />}
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => setDeleteUserId(user.id)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modal de Confirmação de Exclusão */}
            <Dialog
                open={deleteUserId !== null}
                onClose={() => setDeleteUserId(null)}
            >
                <DialogTitle>Confirmar Exclusão</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Tem certeza de que deseja excluir este usuário? Esta ação não pode ser desfeita.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteUserId(null)} color="primary"
                        sx={{ fontSize: "16px", backgroundColor: "#86efac", "&:hover": { backgroundColor: "#4ade80" } }}
                        >
                        Cancelar
                    </Button>
                    <Button onClick={handleDeleteUser} color="error"
                    sx={{ fontSize: "16px", backgroundColor: "#86efac", "&:hover": { backgroundColor: "#4ade80" } }}>
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Modal de Edição de Usuário */}
            <Dialog
                open={editUser !== null}
                onClose={() => setEditUser(null)}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Editar Usuário</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Nome"
                                variant="outlined"
                                fullWidth
                                value={editUser?.name || ""}
                                onChange={(e) =>
                                    setEditUser((prev: any) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Login"
                                variant="outlined"
                                fullWidth
                                value={editUser?.login || ""}
                                onChange={(e) =>
                                    setEditUser((prev: any) => ({
                                        ...prev,
                                        login: e.target.value,
                                    }))
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Função"
                                variant="outlined"
                                fullWidth
                                value={editUser?.role || ""}
                                onChange={(e) =>
                                    setEditUser((prev: any) => ({
                                        ...prev,
                                        role: e.target.value,
                                    }))
                                }
                            />
                        </Grid>
                        {editUser?.role === "Assistencial" && (
                            <Grid item xs={12}>
                                <TextField
                                    label="Especialidade"
                                    variant="outlined"
                                    fullWidth
                                    value={editUser?.specialty || ""}
                                    onChange={(e) =>
                                        setEditUser((prev: any) => ({
                                            ...prev,
                                            specialty: e.target.value,
                                        }))
                                    }
                                />
                            </Grid>
                        )}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setEditUser(null)}
                        color="primary"
                        sx={{
                            fontSize: "16px",
                            backgroundColor: "#86efac",
                            "&:hover": { backgroundColor: "#4ade80" },
                        }}
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleSaveUser}
                        color="primary"
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

            {/* Botão de Logout */}
            <button
                onClick={handleLogout}
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
                Logout
            </button>
        </div>
    );
};

export default Dashboard;

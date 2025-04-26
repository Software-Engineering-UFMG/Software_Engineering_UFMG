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
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@mui/material";
import {
  Edit,
  Delete,
  ToggleOn,
  ToggleOff,
  NoteAdd,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { getAllUsers } from "../../services/api"; // Import the API function
import { updateUser } from "../../services/api"; // Import the API function
import { deleteUser } from "../../services/api";

export const Dashboard = () => {
  const [users, setUsers] = useState<any[]>([]); // State to store users
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading
  const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
  const [editUser, setEditUser] = useState<any | null>(null); // State for the user being edited
  const [filters, setFilters] = useState({
    name: "",
    login: "",
    role: "",
    specialty: "",
  });
  const navigate = useNavigate();

 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getAllUsers(); 
        console.log("Fetched users:", data);
        setUsers(data); 
      } catch (error) {
        console.error("Erro ao obter usuários:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEditUser = (userId: number) => {
    navigate(`/dashboard/editUser/${userId}`); 
  };

  const handleSaveUser = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === editUser.id ? editUser : user))
    );
    setEditUser(null); 
  };

  const handleToggleActive = async (userId: number) => {
    try {
      const userToUpdate = users.find((user) => user.id === userId);
      if (!userToUpdate) return;

      
      const updatedStatus =
        userToUpdate.status === "Active" ? "Inactive" : "Active";

      
      const updatedUser = await updateUser(userId.toString(), {
        status: updatedStatus,
      });

      
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, status: updatedUser.status } : user
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar o status do usuário:", error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      if (deleteUserId === null) return;

      setLoadingDelete(true); 

      
      console.log("Deleting user with ID:", deleteUserId, "Type:", typeof deleteUserId);
      const res = await deleteUser(deleteUserId.toString());
      console.log("User ID to delete:",deleteUserId);
      if (res.status !== 200) {
        console.error("Erro ao deletar usuário:", res);
        return;
      }
      
      console.log("User deleted successfully");

      
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== deleteUserId)
      );

      
      setDeleteUserId(null);
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    } finally {
      setLoadingDelete(false); 
    }
  };

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [field]: value }));
  };

  const handleLogout = () => {
    console.log("Admin logged out");
    navigate("/"); 
  };

  const filteredUsers = users.filter((user) => {
    return (
      (user.name?.toLowerCase() || "").includes(filters.name.toLowerCase()) &&
      (user.username?.toLowerCase() || "").includes(
        filters.login.toLowerCase()
      ) &&
      (user.role?.toLowerCase() || "").includes(filters.role.toLowerCase()) &&
      (user.specialty?.toLowerCase() || "").includes(
        filters.specialty.toLowerCase()
      )
    );
  });
  return (
    <div className="!p-10">
      <Typography variant="h4" gutterBottom>
        Painel Administrativo
      </Typography>

      {/* Tabela de Usuários */}
      {loading ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
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
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    {user.role === "Assistencial" ? user.specialty : "N/A"}
                  </TableCell>
                  <TableCell>
                    {user.status === "Active" ? "Ativado" : "Desativado"}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="secondary"
                      onClick={() => handleEditUser(user.id)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color={user.status === "Active" ? "success" : "default"}
                      onClick={() => handleToggleActive(user.id)}
                    >
                      {user.status === "Active" ? <ToggleOn /> : <ToggleOff />}
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
      )}

      {/* Modal de Confirmação de Exclusão */}
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

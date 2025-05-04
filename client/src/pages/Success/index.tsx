import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router";

const Success = () => {
  return (
    <Box
      sx={{
        width: 400,
        height: "100vh",
        margin: "auto",
        padding: 2,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="flex flex-col  !p-10 bg-green-100 rounded-4xl">
        <Typography
          variant="h5"
          gutterBottom
        >
          Usuário cadastrado com sucesso!
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          color="primary"
          sx={{
            marginTop: 2,
            backgroundColor: "#86efac",
            "&:hover": { backgroundColor: "#4ade80" },
          }}
        >
          Voltar para o início
        </Button>
      </div>
    </Box>
  );
};

export default Success;

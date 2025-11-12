import React from "react";
import logoImg from "../assets/logo.png";
import {
  Button,
  Box,
  Typography,
  Paper,
  TextField,
} from "@mui/material";

const Login: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
                width: '100%',
                borderRadius: '8',
            }}
        >
            <Paper elevation={3} sx={{ p: 4, minWidth: 300, position: "relative", overflow: "visible"}}>
                <Box textAlign="center" mb={2}>
                    <Box
                        sx={{
                            width: "120px",
                            height: "80px",
                            mx: "auto",
                            mb: 2, // espaçamento abaixo do logo
                            background: "#B3D4F5",
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            color: "#fff",
                        }}
                    >
                         <img
                            src={logoImg}
                            alt="Logo"
                            style={{ width: "80%", height: "80%", objectFit: "cover" }}
                        />
                    </Box>
                    <Typography variant="h6" component="h1" fontWeight={600} mb={1}>
                        Bem-vindo
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Faça login para acessar o sistema
                    </Typography>
                    <Box component="form">
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            sx={{ mt: 1 }} // adiciona espaçamento acima (2 = ~16px)
                        />
                        <TextField
                            label="Senha"
                            type="password"
                            fullWidth
                            sx={{ mt: 1 }} 
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{mt: 2, background: "#B3D4F5"}}
                        >
                            <Box display="flex" alignItems="center" gap={1}>
                                Entrar
                            </Box>
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
        
    )
};

export default Login;
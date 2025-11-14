import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import {
  Button,
  Box,
  Typography,
  Paper,
  TextField,
} from "@mui/material";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const emailValido = email.includes("@") && email.includes(".");
  const senhaValida = senha.length >= 4;

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
              mb: 2,
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
            
            {/* CAMPO EMAIL */}
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={email.length > 0 && !emailValido}
              sx={{
                mt: 1,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor:
                      email.length > 0 && emailValido ? "green" : undefined,
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color:
                    email.length > 0 && emailValido ? "green" : undefined,
                },
              }}
            />

            {/* CAMPO SENHA */}
            <TextField
              label="Senha"
              type="password"
              fullWidth
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              error={senha.length > 0 && !senhaValida}
              sx={{
                mt: 1,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor:
                      senha.length > 0 && senhaValida ? "green" : undefined,
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color:
                    senha.length > 0 && senhaValida ? "green" : undefined,
                },
              }}
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
  );
};

export default Login;

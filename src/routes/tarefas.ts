import express from "express";
import {
  getTarefas,
  getTarefaById,
  createTarefa,
  updateTarefa,
  deleteTarefa,
} from "../controllers/tarefasControllers";
import { validarTarefa } from "../middlewares/validarTarefa";
import { verificarTarefaExiste } from "../middlewares/verificarTarefaExiste";

const router = express.Router();

router.get("/tarefas", getTarefas);
router.get("/tarefas/:id", verificarTarefaExiste, getTarefaById);
router.post("/tarefas", validarTarefa, createTarefa);
router.put("/tarefas/:id", verificarTarefaExiste, validarTarefa, updateTarefa);
router.delete("/tarefas/:id", verificarTarefaExiste, deleteTarefa);

export default router;

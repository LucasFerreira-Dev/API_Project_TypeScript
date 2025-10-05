import express from "express";
import { getTarefas, getTarefaById, createTarefa, updateTarefa, deleteTarefa } from "../controllers/tarefasControllers";

const router = express.Router();

router.get("/tarefas", getTarefas);
router.get("/tarefas/:id", getTarefaById);
router.post("/tarefas", createTarefa);
router.put("/tarefas/:id", updateTarefa);
router.delete("/tarefas/:id", deleteTarefa);

export default router;

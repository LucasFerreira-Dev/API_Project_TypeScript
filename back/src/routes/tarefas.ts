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

/**
 * @swagger
 * tags:
 *   name: Tarefas
 *   description: Endpoints para gerenciar tarefas
 */

/**
 * @swagger
 * /tarefas:
 *   get:
 *     summary: Lista todas as tarefas
 *     tags: [Tarefas]
 *     responses:
 *       200:
 *         description: Lista de tarefas
 */
router.get("/tarefas", getTarefas);

/**
 * @swagger
 * /tarefas/{id}:
 *   get:
 *     summary: Retorna uma tarefa pelo ID
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da tarefa
 *     responses:
 *       200:
 *         description: Tarefa encontrada
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/tarefas/:id", verificarTarefaExiste, getTarefaById);

/**
 * @swagger
 * /tarefas:
 *   post:
 *     summary: Cria uma nova tarefa
 *     tags: [Tarefas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pendente, em_andamento, concluida]
 *               concluidoEm:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       201:
 *         description: Tarefa criada
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/tarefas", validarTarefa, createTarefa);

/**
 * @swagger
 * /tarefas/{id}:
 *   put:
 *     summary: Atualiza uma tarefa pelo ID
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pendente, em_andamento, concluida]
 *               concluidoEm:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Tarefa atualizada
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro interno do servidor 
 */
router.put("/tarefas/:id", verificarTarefaExiste, validarTarefa, updateTarefa);

/**
 * @swagger
 * /tarefas/{id}:
 *   delete:
 *     summary: Deleta uma tarefa pelo ID
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da tarefa
 *     responses:
 *       200:
 *         description: Tarefa deletada
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/tarefas/:id", verificarTarefaExiste, deleteTarefa);

export default router;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tarefasControllers_1 = require("../controllers/tarefasControllers");
const validarTarefa_1 = require("../middlewares/validarTarefa");
const verificarTarefaExiste_1 = require("../middlewares/verificarTarefaExiste");
const router = express_1.default.Router();
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
router.get("/tarefas", tarefasControllers_1.getTarefas);
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
router.get("/tarefas/:id", verificarTarefaExiste_1.verificarTarefaExiste, tarefasControllers_1.getTarefaById);
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
router.post("/tarefas", validarTarefa_1.validarTarefa, tarefasControllers_1.createTarefa);
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
router.put("/tarefas/:id", verificarTarefaExiste_1.verificarTarefaExiste, validarTarefa_1.validarTarefa, tarefasControllers_1.updateTarefa);
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
router.delete("/tarefas/:id", verificarTarefaExiste_1.verificarTarefaExiste, tarefasControllers_1.deleteTarefa);
exports.default = router;

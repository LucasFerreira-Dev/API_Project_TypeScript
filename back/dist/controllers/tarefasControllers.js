"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTarefa = exports.updateTarefa = exports.createTarefa = exports.getTarefaById = exports.getTarefas = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getTarefas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tarefas = yield prisma.tarefa.findMany();
    res.json(tarefas);
});
exports.getTarefas = getTarefas;
const getTarefaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const tarefa = yield prisma.tarefa.findUnique({ where: { id } });
    if (!tarefa)
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    res.json(tarefa);
});
exports.getTarefaById = getTarefaById;
const createTarefa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo, descricao, status, concluidoEm } = req.body;
    const novaTarefa = yield prisma.tarefa.create({
        data: { titulo, descricao, status, concluidoEm },
    });
    res.status(201).json(novaTarefa);
});
exports.createTarefa = createTarefa;
const updateTarefa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const { titulo, descricao, status, concluidoEm } = req.body;
    const tarefaAtualizada = yield prisma.tarefa.update({
        where: { id },
        data: { titulo, descricao, status, concluidoEm },
    });
    res.json(tarefaAtualizada);
});
exports.updateTarefa = updateTarefa;
const deleteTarefa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    yield prisma.tarefa.delete({ where: { id } });
    // Conta quantas tarefas ainda existem
    const totalTarefas = yield prisma.tarefa.count();
    if (totalTarefas === 0) {
        yield prisma.$executeRawUnsafe(`ALTER SEQUENCE "Tarefa_id_seq" RESTART WITH 1`);
    }
    res.json({ message: `Tarefa ${id} deletada com sucesso` });
});
exports.deleteTarefa = deleteTarefa;

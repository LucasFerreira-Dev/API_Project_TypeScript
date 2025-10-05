"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTarefa = exports.updateTarefa = exports.createTarefa = exports.getTarefaById = exports.getTarefas = void 0;
const getTarefas = (req, res) => {
    res.json([{ id: 1, title: "Estudar API", completed: false }]);
};
exports.getTarefas = getTarefas;
const getTarefaById = (req, res) => {
    const { id } = req.params;
    res.json({ id, title: "Tarefa exemplo", completed: false });
};
exports.getTarefaById = getTarefaById;
const createTarefa = (req, res) => {
    const novaTarefa = req.body;
    res.status(201).json({ message: "Tarefa criada!", tarefa: novaTarefa });
};
exports.createTarefa = createTarefa;
const updateTarefa = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Tarefa ${id} atualizada!` });
};
exports.updateTarefa = updateTarefa;
const deleteTarefa = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Tarefa ${id} deletada!` });
};
exports.deleteTarefa = deleteTarefa;

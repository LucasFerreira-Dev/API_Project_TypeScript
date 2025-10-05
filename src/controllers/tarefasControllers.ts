import { Request, Response } from "express";

export const getTarefas = (req: Request, res: Response) => {
  res.json([{ id: 1, title: "Estudar API", completed: false }]);
};

export const getTarefaById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id, title: "Tarefa exemplo", completed: false });
};

export const createTarefa = (req: Request, res: Response) => {
  const novaTarefa = req.body;
  res.status(201).json({ message: "Tarefa criada!", tarefa: novaTarefa });
};

export const updateTarefa = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Tarefa ${id} atualizada!` });
};

export const deleteTarefa = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Tarefa ${id} deletada!` });
};
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTarefas = async (req: Request, res: Response) => {
  const tarefas = await prisma.tarefa.findMany();
  res.json(tarefas);
};

export const getTarefaById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const tarefa = await prisma.tarefa.findUnique({ where: { id } });

  if (!tarefa) return res.status(404).json({ erro: "Tarefa não encontrada" });
  res.json(tarefa);
};

export const createTarefa = async (req: Request, res: Response) => {
  const { titulo, descricao, status, concluidoEm } = req.body;

  const novaTarefa = await prisma.tarefa.create({
    data: { titulo, descricao, status, concluidoEm },
  });

  res.status(201).json(novaTarefa);
};

export const updateTarefa = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { titulo, descricao, status, concluidoEm } = req.body;

  const tarefaAtualizada = await prisma.tarefa.update({
    where: { id },
    data: { titulo, descricao, status, concluidoEm },
  });

  res.json(tarefaAtualizada);
};

export const deleteTarefa = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  await prisma.tarefa.delete({ where: { id } });

  // Conta quantas tarefas ainda existem
  const totalTarefas = await prisma.tarefa.count();
  if (totalTarefas === 0) {
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Tarefa_id_seq" RESTART WITH 1`)
  }

  res.json({ message: `Tarefa ${id} deletada com sucesso` });
};

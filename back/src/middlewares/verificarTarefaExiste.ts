import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Middleware para verificar se a tarefa existe pelo ID
export async function verificarTarefaExiste(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);
  const tarefa = await prisma.tarefa.findUnique({ where: { id } });

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  next();
}

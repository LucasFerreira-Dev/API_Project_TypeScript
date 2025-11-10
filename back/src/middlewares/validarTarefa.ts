import { Request, Response, NextFunction } from "express";
import { z } from "zod";

// Esquema para validação da tarefa
export const esquemaTarefa = z.object({
  titulo: z.string().min(1, "O título é obrigatório"),
  descricao: z.string().optional(),
  status: z.enum(["pendente", "em_andamento", "concluida"]).optional(),
  concluidoEm: z.string().optional(), // Removeu .datetime()
});

// Middleware para validar o corpo da requisição
export function validarTarefa(req: Request, res: Response, next: NextFunction) {
  const resultado = esquemaTarefa.safeParse(req.body);
  if (!resultado.success) {
    // A propriedade correta é 'issues' e não 'errors'
    return res.status(400).json({
      erro: resultado.error.issues.map(e => e.message).join(", "),
    });
  }
  next();
}

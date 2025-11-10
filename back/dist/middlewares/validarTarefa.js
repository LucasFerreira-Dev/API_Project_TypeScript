"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esquemaTarefa = void 0;
exports.validarTarefa = validarTarefa;
const zod_1 = require("zod");
// Esquema para validação da tarefa
exports.esquemaTarefa = zod_1.z.object({
    titulo: zod_1.z.string().min(1, "O título é obrigatório"),
    descricao: zod_1.z.string().optional(),
    status: zod_1.z.enum(["pendente", "em_andamento", "concluida"]).optional(),
    concluidoEm: zod_1.z.string().optional(), // Removeu .datetime()
});
// Middleware para validar o corpo da requisição
function validarTarefa(req, res, next) {
    const resultado = exports.esquemaTarefa.safeParse(req.body);
    if (!resultado.success) {
        // A propriedade correta é 'issues' e não 'errors'
        return res.status(400).json({
            erro: resultado.error.issues.map(e => e.message).join(", "),
        });
    }
    next();
}

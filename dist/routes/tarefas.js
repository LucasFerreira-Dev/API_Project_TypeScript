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
router.get("/tarefas", tarefasControllers_1.getTarefas);
router.get("/tarefas/:id", verificarTarefaExiste_1.verificarTarefaExiste, tarefasControllers_1.getTarefaById);
router.post("/tarefas", validarTarefa_1.validarTarefa, tarefasControllers_1.createTarefa);
router.put("/tarefas/:id", verificarTarefaExiste_1.verificarTarefaExiste, validarTarefa_1.validarTarefa, tarefasControllers_1.updateTarefa);
router.delete("/tarefas/:id", verificarTarefaExiste_1.verificarTarefaExiste, tarefasControllers_1.deleteTarefa);
exports.default = router;

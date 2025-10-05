import express from 'express';
import 'dotenv/config';
import tarefaRoutes from './routes/tarefas';
import { setupSwagger } from './swagger';

const app = express();
app.use(express.json());

setupSwagger(app);

app.use('', tarefaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server is running on http://localhost:${PORT}`));

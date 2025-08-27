import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/health', (_req, res) => res.json({ status: 'OK', app: 'generated-app' }));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('API generated-app sur port ' + PORT));

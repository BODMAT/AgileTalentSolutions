import express from 'express';
import cors from 'cors';
import profilesRoutes from './routes/profiles.ts';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', profilesRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

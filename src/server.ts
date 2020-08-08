import express from 'express';

const app = express();

app.use(express.json());

const port = 3333;
// eslint-disable-next-line no-console
app.listen(3333, () => console.log(`🚀 Server running on port ${port} 🚀`));

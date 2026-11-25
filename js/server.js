import express from 'express';
import { writeFile, mkdir } from 'node:fs/promises';

const porta = 3000

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/feedback', (req, res) => {
    try {
        const { nota, feedback } = req.body;

        console.log(dados)

        res.json('Sucesso')

    } catch (error) {
        console.error(error);
    }
});

app.listen(porta, () => {
    console.log(`Servidor rodando em https://localhost:${porta}`);
});
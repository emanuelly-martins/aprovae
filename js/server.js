import express from 'express';
import { error } from 'node:console';
import { writeFile, mkdir } from 'node:fs/promises';

// Criando uma pasta com mkdir através da URL, e salvando-a na const pasta
const pasta = await mkdir(new URL('./data/'), import.meta.url, { recursive: true });

const porta = 3000

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/feedback', (req, res) => {
    try {
        if (conexao.ok) {
            writeFile(`${pasta}/resposta.json`, JSON.stringify(dados, null, 2), 'utf-8');


        } else {
            console.log('Erro ao salvar os dados');
        };

    } catch (error) {
        console.error(error);
    };
});

app.listen(porta, () => {
    console.log(`Servidor rodando em https://localhost:${porta}`);
});

const { nota, feedback } = req.body;
console.log(dados)




res.json('Sucesso')

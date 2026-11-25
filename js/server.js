// Trazendo as funções facilitadoras do express
import express from 'express';

// Trazendo a função de escrita em arquivo e criação de pastas
import { writeFile, mkdir } from 'node:fs/promises';

// Criando uma pasta com mkdir através da URL, e salvando-a na const pasta
await mkdir(new URL('./data/', import.meta.url), { recursive: true });

// Porta que o servidor vai usar
const porta = 3000

// Atribuindo o express na constante app
const app = express();

// Permite o envio de dados json
app.use(express.json());


app.use(express.static('public'));


// Criando uma requisição do tipo post para receber os dados que o feedback.js conseguiu
app.post('/feedback', (req, res) => {
    try {

        // Dados recebidos: o req é a requisição do frontend, os dados enviados ao servidor backend, recebidos pelas tratativas do feedback.js
        // E o .body é o conteúdo dessa requisição, os dados em si
        const dados = req.body;


        if (dados) {
            // Escrevendo os dados em resposta.json
            writeFile(`${pasta}/resposta.json`, JSON.stringify(dados, null, 2), 'utf-8');
            res.json('Sucesso')

        } else {
            // Resposta caso não salve
            console.log('Erro ao salvar os dados');
        };

    } catch (error) {
        // Erro específico
        console.error(error);
    };
});

// Toda vez que entrar no servideor esse aviso será disparado
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
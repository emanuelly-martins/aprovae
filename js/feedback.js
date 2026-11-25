import { readFile, writeFile, mkdir } from 'node:fs/promises';

const pasta = await mkdir(new URL('./data/resposta.json/'), import.meta.url, { recursive: true });

const form = document.getElementById('formulario');

const stars = document.getElementById('nota');

const resposta = document.getElementById('feedback');

const botao = document.getElementById('botaoEnviar');


form.addEventListener('submit', async (evento) => {
    try {
        const dados = {
            nota: stars,
            feedback: resposta
        };

        writeFile('pasta', JSON.stringify(dados), 'utf-8');
    } catch (error) {
        
    }
})



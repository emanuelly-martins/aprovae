import {readFile, writeFile, mkdir} from 'node:fs/promises'

const form = document.getElementById(formulario);

const stars = document.getElementById(nota);

const resposta = document.getElementById(feedback);

const botao = document.getElementById(botaoEnviar);


const pasta = await mkdir (new URL ('./data/resposta.json/'), import.meta.url, {recursive: true});

try {
    if (botao = true) {
        writeFile('pasta', 'resposta', 'utf-8');
        return 'Obrigado!'
    }
} catch (error) {
    console.error()
}
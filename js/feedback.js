import { writeFile, mkdir } from 'node:fs/promises';

// Criando uma pasta com mkdir através da URL, e salvando-a na const pasta
const pasta = await mkdir(new URL('./data/'), import.meta.url, { recursive: true });

// Criando uma constante para referenciar o form do html, pelo id
const form = document.getElementById('formulario');

// Criando uma constante para referenciar a nota (estrelas) do html, pelo id
const stars = document.getElementById('nota');

// Criando uma constante para referenciar o feedback escrito do html, pelo seu id
const resposta = document.getElementById('feedback');

// Constante criada para representar o botão de envio
const botao = document.getElementById('botaoEnviar');

// Armazenando os dados enviados
const dados = {
    nota: stars.values,
    feedback: resposta.values
};

// Conectando o feedback.js com o server.js
const conexao = await fetch('/feedback', {
    // O método de requisição, POST, pois estamos enviando os dados obtidos do usuário para o servidor
    method: 'POST',
    // Isso diz que está sendo enviados dados em json
    headers: {
        'Content-Type': 'application/json'
    },
    // Esse body representa os dados obtidos em formato de string json
    body: JSON.stringify(dados)
});


form.addEventListener('submit', async (evento) => {
    try {
        writeFile(`${pasta}/resposta.json`, JSON.stringify(dados, null, 2), 'utf-8');

        alert('Obrigado pelo feedback!');

    } catch (error) {
        console.error(error);
    };
});


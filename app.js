const terminalBody = document.getElementById('terminal-body');

const responses = {
    cafe: [
        "Processando requisição de cafeína...",
        "[====================] 100%",
        "Café injetado na corrente sanguínea com sucesso.",
        "Status: ACORDADO. Capacidade de escrever código aumentada em 200%."
    ],
    bug: [
        "Buscando erros no código...",
        "ERRO CRÍTICO na linha 404: 'Café não encontrado'",
        "Aplicando correção de emergência...",
        "Testes passando. O bug foi esmagado com sucesso!"
    ],
    deploy: [
        "Iniciando deploy (colocando o sistema no ar)...",
        "Conectando ao servidor...",
        "Cruzando os dedos...",
        "Deploy realizado com sucesso! Rezem para não cair nada durante a madrugada."
    ],
    ia: [
        "Conectando ao ChatGPT / GitHub Copilot...",
        "Prompt enviado: 'Escreva essa lógica super complexa porque estou com preguiça'...",
        "Analisando resposta gerada pela IA...",
        "[AVISO] A IA inventou funções que não existem.",
        "Resultado: Consertando o código da IA manualmente. A revolução das máquinas vai ter que esperar."
    ],
    reuniao: [
        "Iniciando conexão no Teams / Google Meet...",
        "Carregando protocolo de segurança: 'Câmera desligada e microfone mutado' [OK]",
        "Detectando anomalia no áudio: 'Fulano, você tá no mudo!'",
        "Processando 1h30 de discussão circular...",
        "Output final: 'Essa reunião definitivamente poderia ter sido resolvida com um único e-mail'."
    ]
};

async function typeWriterEffect(textElement, text, speed = 30) {
    for (let i = 0; i < text.length; i++) {
        textElement.innerHTML += text.charAt(i);
        await new Promise(r => setTimeout(r, speed));
    }
    textElement.innerHTML += '<br>';
    // Faz o scroll descer automaticamente conforme o texto aparece
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

async function runCommand(command) {
    // Escreve o comando digitado pelo usuário na tela
    const userCommand = document.createElement('span');
    userCommand.className = 'command-input';
    userCommand.innerHTML = `<br>> executando: script_${command}.sh<br>`;
    terminalBody.appendChild(userCommand);

    const lines = responses[command];
    
    // Roda o efeito de digitação para cada linha da resposta
    for (let line of lines) {
        const responseLine = document.createElement('span');
        terminalBody.appendChild(responseLine);
        await typeWriterEffect(responseLine, line);
    }
    
    // Adiciona a linha de "Aguardando comando" ao final
    const breakLine = document.createElement('span');
    breakLine.innerHTML = `<span style="color: #B0BEC5;">> Aguardando próximo comando...</span><br>`;
    terminalBody.appendChild(breakLine);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}
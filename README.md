# CS-BOT-FURIA 🎯

Bot do Discord para ajudar os fãs a acompanharem tudo sobre a FURIA no CS:GO de forma rápida e divertida.

## ✨ Funcionalidades

- `/proximo_jogo`: Exibe informações sobre o próximo jogo da FURIA.
- `/ranking`: Mostra o ranking atualizado da FURIA.
- `/jogadores`: Exibe a lista de jogadores.
- `/noticias`: Retorna as últimas notícias.
- `/histórico_partidas`: Exibe o histórico recente da equipe.
- `/palpite`: Permite que o usuário dê seu palpite.
- `/eu_na_furia`: Uma roleta divertida para descobrir com quem você se parece na equipe.

## 🚀 Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

## 🛠 Instalação

1. Clone o repositório:
   git clone https://github.com/Sanviictor/CS-BOT-FURIA.git
   cd CS-BOT-FURIA

2. Instalar dependências
Após clonar o repositório, instale as dependências necessárias utilizando o comando npm:
  npm install

3. Configurar variáveis de ambiente
Crie um arquivo .env na raiz do seu projeto e adicione as variáveis de ambiente necessárias. Exemplo:
  TOKEN=seu_token_aqui
  CLIENT_ID=seu_client_id_aqui
  GUILD_ID=seu_guild_id_aqui
TOKEN: Token do seu bot no Discord. Você pode obter isso criando um bot na página de desenvolvedores do Discord.
CLIENT_ID: ID do cliente do seu bot (também na página de desenvolvedores do Discord).
GUILD_ID: ID do servidor onde o bot irá operar.

4. Iniciar o bot
Após configurar o arquivo .env, você pode iniciar o bot com o comando:
  node index.js

Como usar os comandos
Após adicionar o bot ao seu servidor do Discord, você pode usar os seguintes comandos:

/proximo_jogo: Exibe informações sobre o próximo jogo da FURIA no CS.
/ranking: Mostra o ranking atual da FURIA.
/jogadores: Exibe a lista de jogadores da FURIA.
/noticias: Retorna as últimas notícias sobre a FURIA.
/histórico_partidas: Mostra o histórico de partidas do time.
/palpite: Permite que o usuário faça um palpite sobre o próximo jogo.
/eu_na_furia: Uma roleta divertida que revela em qual jogador da FURIA o usuário seria.

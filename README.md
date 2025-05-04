<<<<<<< HEAD
# CS-FURIA-BOT
Bot do discord para ajudar o usuário a ter acesso ás informações da FURIA de forma facilitada.
=======
# CS-BOT-FURIA
>>>>>>> 818b8c2963ec7071c94eb7182772f66a7ce43fde
============
Bot CS FURIA
Este é um bot do Discord para acompanhar o time de CS:GO da FURIA, com funcionalidades como informações sobre o próximo jogo, classificação, jogadores, e muito mais.

Funcionalidades
/proximo_jogo: Exibe informações sobre o próximo jogo da FURIA.

/ranking: Mostra o ranking atualizado da FURIA.

/jogadores: Exibe a lista de jogadores da FURIA.

/noticias: Retorna as últimas notícias relacionadas à FURIA.

/histórico_partidas: Exibe o histórico de partidas da FURIA.

/palpite: Permite que o usuário faça um palpite sobre o próximo jogo da FURIA.

/eu_na_furia: Exibe uma roleta divertida para ver quem o usuário seria no time da FURIA.

Pré-requisitos
Antes de começar, você precisará instalar alguns pré-requisitos:

Node.js: Você pode instalar o Node.js em https://nodejs.org/.

Git: Para clonar o repositório e versionar o código, é necessário ter o Git instalado. Baixe o Git aqui.

Instalação
Siga estas etapas para configurar o ambiente localmente:

1. Clonar o repositório
Clone o repositório do GitHub para o seu computador:
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

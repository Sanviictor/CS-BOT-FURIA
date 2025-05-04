const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("jogadores")
    .setDescription("Mostra a lista dos jogadores da FURIA no CS:GO"),

  async execute(interaction) {
    // Lista de jogadores (você pode adicionar mais informações ou usar uma API)
    const jogadores = [
      { nome: "Yuri", posicao: "AWPer" },
      { nome: "KSCERATO", posicao: "Rifler" },
      { nome: "Art", posicao: "IGL" },
      { nome: "VINI", posicao: "Support" },
      { nome: "Drop", posicao: "Entry Fragger" },
    ];

    // Monta a resposta com a lista de jogadores
    const listaJogadores = jogadores
      .map((jogador) => `${jogador.nome} - ${jogador.posicao}`)
      .join("\n");

    await interaction.reply(`**Jogadores da FURIA CS:GO**:\n${listaJogadores}`);
  },
};

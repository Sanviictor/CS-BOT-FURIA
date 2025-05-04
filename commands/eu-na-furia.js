const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("eu_na_furia")
    .setDescription("Veja qual jogador da FURIA você é na roleta!"),

  async execute(interaction) {
    // Lista dos jogadores da FURIA
    const jogadoresFuria = [
      "Yuurih",
      "Art",
      "KSCERATO",
      "VINI",
      "Drop",
      "Fury",
    ];

    // Sorteio aleatório
    const jogadorEscolhido =
      jogadoresFuria[Math.floor(Math.random() * jogadoresFuria.length)];

    // Resposta
    await interaction.reply(
      `${interaction.user.username}, você é o **${jogadorEscolhido}** da FURIA hoje! 🔥🎮`
    );
  },
};

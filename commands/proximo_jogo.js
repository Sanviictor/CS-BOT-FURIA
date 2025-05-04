const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("proximo_jogo")
    .setDescription(
      "Exibe as informações sobre o próximo jogo da FURIA no CS."
    ),

  async execute(interaction) {
    // Link para os próximos jogos da FURIA
    const link = "https://draft5.gg/equipe/330-FURIA/proximas-partidas";

    await interaction.reply(
      `Confira aqui os próximos jogos da FURIA no CS: ${link}`
    );
  },
};

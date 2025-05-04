const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("historico_partidas")
    .setDescription("Confira o histórico de partidas da FURIA no CS."),

  async execute(interaction) {
    await interaction.reply({
      content:
        "🔥 Quer ver o histórico de partidas da FURIA no CS?\nConfira o desempenho da equipe aqui:\n👉 https://www.hltv.org/team/8297/furia#tab-matchesBox",
      ephemeral: false,
    });
  },
};

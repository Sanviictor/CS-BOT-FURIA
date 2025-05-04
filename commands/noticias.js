const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("noticias")
    .setDescription("Confira as últimas notícias sobre a FURIA no CS."),

  async execute(interaction) {
    await interaction.reply({
      content:
        "🔥 Quer saber tudo que está rolando com a FURIA no CS?\nConfira as últimas notícias aqui:\n👉 https://www.hltv.org/team/8297/furia#tab-newsBox",
      ephemeral: false,
    });
  },
};

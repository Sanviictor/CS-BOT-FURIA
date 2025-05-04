const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ranking")
    .setDescription("Veja o ranking mundial atualizado de times de CS"),

  async execute(interaction) {
    await interaction.reply(
      `🏆 Confira o ranking mundial atualizado dos times de CS aqui:\n🔗 https://www.hltv.org/ranking/teams\n\n🔥 Quer saber mais sobre onde nossos Furiosos se encontram?\n🔗 https://www.hltv.org/team/8297/furia`
    );
  },
};

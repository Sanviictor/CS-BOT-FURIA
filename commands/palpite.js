const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("palpite")
    .setDescription("Dê seu palpite para o próximo jogo da FURIA no CS!")
    .addStringOption((option) =>
      option
        .setName("resultado")
        .setDescription("Qual será o resultado do jogo?")
        .setRequired(true)
        .addChoices(
          { name: "Vitória", value: "vitória" },
          { name: "Derrota", value: "derrota" },
          { name: "Empate", value: "empate" }
        )
    ),

  async execute(interaction) {
    const resultado = interaction.options.getString("resultado");

    await interaction.reply({
      content: `🎯 Você deu seu palpite para o próximo jogo da FURIA!\nSeu palpite: **${resultado}**\nVamos ver se a FURIA vai fazer o que você espera! 😎\n\nQuer ver o próximo jogo? Confira o link: https://www.hltv.org/team/8297/furia#tab-matchesBox`,
      ephemeral: false,
    });
  },
};

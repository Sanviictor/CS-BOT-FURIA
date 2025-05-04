const { SlashCommandBuilder } = require("discord.js");
const cron = require("node-cron");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Veja o status atual da FURIA no CS!"),

  async execute(interaction) {
    await interaction.reply({
      content: "🔄 Status da FURIA sendo atualizado...",
      ephemeral: true,
    });

    // Defina o canal onde a mensagem será enviada (substitua pelo ID real do canal)
    const statusChannel =
      interaction.guild.channels.cache.get("ID_DO_CANAL_AQUI");

    // Defina a mensagem do status
    const mensagemStatus = `🔥 FURIA CS Status Atual 🔥
    
    🏆 **Próximo Jogo**: [Veja detalhes no HLTV](https://www.hltv.org/team/8297/furia#tab-matchesBox)
    
    📊 **Ranking Atual**: [FURIA no Ranking HLTV](https://www.hltv.org/team/8297/furia)
    
    📅 **Últimas Notícias**: [Acesse as últimas notícias sobre a FURIA](https://www.hltv.org/team/8297/furia#tab-newsBox)
    `;

    // Usando node-cron para enviar a mensagem às 9:30 AM e 18:00 PM todos os dias
    cron.schedule("30 9 * * *", () => {
      statusChannel.send(mensagemStatus);
    });

    cron.schedule("0 18 * * *", () => {
      statusChannel.send(mensagemStatus);
    });
  },
};

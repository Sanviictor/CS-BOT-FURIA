const { HLTV } = require("hltv");

HLTV.getTeamRanking()
  .then((ranking) => {
    console.log("Top 5 times:");
    for (let i = 0; i < 5; i++) {
      console.log(
        `${i + 1}. ${ranking[i].team.name} (${ranking[i].points} pts)`
      );
    }
  })
  .catch((err) => {
    console.error("Erro ao buscar ranking:", err);
  });

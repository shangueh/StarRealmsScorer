const initialState = {
  player: [
    { name: "Joueur Rouge", score: 50, color: "#F36445", visible: true },
    { name: "Joueur Bleu", score: 50, color: "#5474D9", visible: true },
    { name: "Joueur Vert", score: 50, color: "#59CD4B", visible: false },
    { name: "Joueur Jaune", score: 50, color: "#F4CD47", visible: false },
    { name: "Joueur Violet", score: 50, color: "#9C5FDA", visible: false },
    { name: "Joueur Turquoise", score: 50, color: "#6EB8BE", visible: false }
  ],
  nbPlayer: 2
};

function settingGames(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "SET_SCORE":
      nextState = { ...state };
      nextState.player[action.value.player].score += action.value.addTo;
      return nextState;
    case "RESET_SETTING":
      nextState = { ...state };
      nextState.player[0].score = 50;
      nextState.player[1].score = 50;
      nextState.player[2].score = 50;
      nextState.player[3].score = 50;
      nextState.player[4].score = 50;
      nextState.player[5].score = 50;
      return nextState;
    default:
      return state;
  }
}

export default settingGames;

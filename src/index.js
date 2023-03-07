const View = require("./ttt-view.js");
const Game = require("../ttt_node/game.js");

document.addEventListener("DOMContentLoaded", () => {
  const newGame = new Game();
  const gameContainer = document.querySelector(".ttt");
  const view = new View(newGame, gameContainer);
});

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.handleClick = this.handleClick.bind(this);
    this.setupBoard(el);
    this.bindEvents();
  }

  setupBoard() {
    const grid = document.createElement("ul");

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement("li");
        cell.dataset.pos = JSON.stringify([i, j]);
        grid.append(cell);
      }
    }

    this.el.append(grid);
  }

  bindEvents() {
    this.el.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    const t = e.target;
    "LI" === t.nodeName && this.makeMove(t);
  }

  makeMove(square) {
    const e = JSON.parse(square.dataset.pos),
      r = this.game.currentPlayer;
    try {
      this.game.playMove(e);
    } catch (square) {
      alert("This " + square.msg.toLowerCase());
    }
    square.classList.add(r), this.game.isOver() && this.handleGameOver();
  }

  handleGameOver() {
    this.el.removeEventListener("click", this.handleClick),
      this.el.classList.add("game-over");
    const t = this.game.winner(),
      e = document.createElement("figcaption");
    t
      ? (this.el.classList.add(`winner-${t}`), e.append(`You win, ${t}!`))
      : e.append("It's a draw!"),
      this.el.append(e);
  }
}

module.exports = View;

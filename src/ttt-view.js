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

  makeMove(square) {}
}

module.exports = View;

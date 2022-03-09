document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handClick);
  });
});

function handClick(event) {
  let square = event.target;

  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      if (playerTime == 0) {
        alert(`👽 O Alien Ganhou 👽`);
      } else {
        alert(`🤖 O Robot Ganhou 🤖`);
      }
    }, 10);
  }
  updadeSquares();
}

function updadeSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((squares) => {
    let position = squares.id;
    let symbols = board[position];

    if (symbols != "") {
      squares.innerHTML = `<div class ='${symbols}'></div>`;
    }
  });
}

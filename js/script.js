const mainButton =document.getElementById("button");
const grid = document.querySelector(".grid");
mainButton.addEventListener("click", function () {
  grid.classList.remove("hidden");
  let innerBox = "";
  for (i = 1; i <= 100; i++) {
    innerBox = createBox(i, 10);
    console.log(innerBox);
    grid.append(innerBox);
    innerBox.addEventListener("click", selected); 
      grid.append(innerBox);
  }

  


})

// FUNCTIONS
function createBox(innerNumber, numberOfSquaresInRow) {
  let box = document.createElement("div");
  box.classList.add("box");
  // box.style.width = `calc(100% / ${numberOfSquaresInRow})`;
  // box.style.height = `calc(100% / ${numberOfSquaresInRow})`;
  box.innerHTML = `<span>${innerNumber}</span>`;
  return box;
}
function selected() {
  this.classList.add("selected");
}
const mainButton =document.getElementById("button");
const grid = document.querySelector(".grid");
mainButton.addEventListener("click", function () {
  grid.classList.remove("hidden");
  
  let bombs = [];
  let innerBox = "";
  for (i = 1; i <= 100; i++) {
    innerBox = createBox(i, 10);
    console.log(innerBox);
    grid.append(innerBox);
    innerBox.addEventListener("click", selected,)
  } 
 

  let r = 1;
  while (r <= 16) {
    let randomNumber = mathRandom();
    if (randomNumber[r] != bombs)
    bombs.push(randomNumber);
    r++
  }
  console.log(bombs);
 
  })

 

// FUNCTIONS
/**
 * It is meant for creating a certain number of boxes/cells
 * @param {number} innerNumber
 * @returns {object}
 */
function createBox(innerNumber) {
  let box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = `<span>${innerNumber}</span>`;
  return box;
}
/**
 * It adds a class to a certain element
 * @param {}
 * @returns {class}
 */
function selected() {
  this.classList.add("selected");
  if (bombs.includes(this.innertext));
}
/**
 * It is useful to generate a random number within certain parameters..
 * @param {number} innerNumber
 * @returns {object}
 */
function mathRandom () {
  return Math.floor((Math.random() * 100) + 1);
}
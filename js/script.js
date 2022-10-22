const mainButton =document.getElementById("button");
const grid = document.querySelector(".grid");
const bombs = generateNumbers(16, 1, 100);
const box = document.getElementsByClassName(".box");
console.log(bombs);
mainButton.addEventListener("click", function () {
  grid.classList.remove("hidden");
  

let innerBox = "";
   for (i = 1; i <= 100; i++) {
    innerBox = createBox(i, 10);
     console.log(innerBox);
     grid.append(innerBox);
    innerBox.addEventListener("click", selected)
   } 
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
  if (bombs.includes(parseInt(this.textContent))) {
    this.classList.add("bomb")
    endgame();


  } else {
    this.classList.add("safe")
  }
}
/**
 * It is useful to generate a random number within certain parameters..
 * @param {number} innerNumber
 * @returns {object}
 */
function mathRandom () {
  return Math.floor((Math.random() * 100) + 1);
}

function generateNumbers(numbers, min, max) {
  const result = [];
  while (result.length < numbers) {
    const thisNumber = mathRandom(min, max);
    if (!result.includes(thisNumber)) {
      result.push(thisNumber);
    }
  }
  return result;
}
function endgame (loseWin) {
  const units = document.getElementsByClassName("box");
  for (let i = 0; i < units.length; i++) {
    const unit = units[i];
    unit.removeEventListener("click", selected);
  }
  if (loseWin === "win") {

    alert("Hai vinto");
  } else {

    for (let i = 0; i < units.length; i++) {
      const unit = units[i];
      const unitNumber = parseInt(unit.textContent);
      if (bombs.includes(unitNumber)) {
        unit.classList.add("bomb");
      }
    }}}
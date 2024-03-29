let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      let clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function reset() {
  //Generate new colors on click
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change color disply to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change color of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  //Loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match winner
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  //Pick random number for colors array
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  let arr = [];
  //add num random colors to arr
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
    //get random color and push into array
  }
  //return array
  return arr;
}

function randomColor() {
  //pick a "red" from 0-255
  let r = Math.floor(Math.random() * 256);
  //pick a "green" from 0-255
  let g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0-255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

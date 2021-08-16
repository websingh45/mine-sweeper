const toggleElement = document.querySelector(".toggle");
toggleElement.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});
var idxMines = new Set();
var arr = new Array(100);
var currentscore = 0;
var isclicked = new Array(100);
for (i = 0; i < 100; i++) (arr[i] = -1), (isclicked[i] = 0);
const numTiles = 100;
const numMines = 10;
var tileClicked = 0;
gameTiles = document.querySelectorAll(".tile");
// we'll get an array of all elements of the tiles
for (i = 1; i <= 100; i++) {
  gameTiles[i - 1].classList.add(i);
  console.log(gameTiles[i - 1].classList);
}
function layMines() {
  for (i = 0; i < numMines; i++) {
    flag = false;
    while (!flag) {
      idx = Math.floor(Math.random() * 100);
      if (arr[idx] === -1) {
        flag = true;
        arr[idx] = 1;
        //console.log(idx);
        //console.log(gameTiles[idx].classList);
        idxMines.add(idx);
        gameTiles[idx].innerHTML = '<i class="tile-text fa fa-bomb"></i>';
      }
    }
  }
}
layMines();

function initGame() {
  for (i = 0; i < 100; i++) {
    if (arr[i] == 1) continue;
    else {
      let cnt = 0;
      if (i % 10 != 9 && idxMines.has(i + 1)) {
        cnt++;
      }
      if (i % 10 != 0 && idxMines.has(i - 1)) {
        cnt++;
      }
      if (i < 90 && idxMines.has(i + 10)) {
        cnt++;
      }
      if (i >= 10 && idxMines.has(i - 10)) {
        cnt++;
      }
      if (i % 10 != 9 && i < 90 && idxMines.has(i + 11)) {
        cnt++;
      }
      if (i % 10 != 0 && i < 90 && idxMines.has(i + 9)) {
        cnt++;
      }
      if (i % 10 != 0 && i > 10 && idxMines.has(i - 11)) {
        cnt++;
      }
      if (i % 10 != 9 && i >= 10 && idxMines.has(i - 9)) {
        cnt++;
      }
      gameTiles[i].innerHTML = `<p class="tile-text">${cnt}</p>`;
    }
  }
  // console.log(i, cnt);
}

for (i = 0; i < 100; i++) {
  gameTiles[i].addEventListener("click", (e) => {
    let idx = e.target.classList[1];
    idx--;
    flag = false;
    // console.log(idx);
    if (tileClicked == 90) {
      alert("You Won the Game!");
      location.reload();
    }
    if (arr[idx] == 1) {
      mineFound();
      flag = true;
    } else {
      tileClicked++;
      if (!isclicked[idx]) currentscore++, (isclicked[idx] = 1);
      gameTiles[idx].children[0].style.visibility = "visible";
      document.querySelector(".score").innerHTML = currentscore;
      gameTiles[idx].style.color = "black";
    }
    if (flag) {
      alert("Found A mine ! Game over");
      location.reload();
    }
  });
}
function mineFound() {
  for (j = 0; j < 100; j++) {
    gameTiles[j].children[0].style.visibility = "visible";
  }
  return;
}

initGame();

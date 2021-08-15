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
var arr = new Array(100);
var currentscore = 0;
var isclicked = new Array(100);
for (i = 0; i < 100; i++) (arr[i] = -1), (isclicked[i] = 0);
const numTiles = 100;
const numMines = 10;
gameTiles = document.querySelectorAll(".tile");
// we'll get an array of all elements of the tiles
for (i = 1; i <= 100; i++) {
  gameTiles[i - 1].classList.add(i);
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
        //  console.log(gameTiles[idx].classList);
        gameTiles[idx].innerHTML = '<i class="tile-text fa fa-bomb"></i>';
      }
    }
  }
}
function initGame() {
  for (i = 0; i < 100; i++) {
    let cnt = 0;
    if (arr[i] == 1) continue;
    if (i == 0) {
      if (arr[1] == 1) cnt++;
      if (arr[10] == 1) cnt++;
      if (arr[11] == 1) cnt++;
    } else if (i == 9) {
      if (arr[8] == 1) cnt++;
      if (arr[19] == 1) cnt++;
      if (arr[18] == 1) cnt++;
    } else if (i == 90) {
      if (arr[80] == 1) cnt++;
      if (arr[81] == 1) cnt++;
      if (arr[91] == 1) cnt++;
    } else if (i == 99) {
      if (arr[89] == 1) cnt++;
      if (arr[88] == 1) cnt++;
      if (arr[98] == 1) cnt++;
    } else if (i < 10) {
      if (arr[i - 1] == 1) {
        cnt++;
      }
      if (arr[i + 1] == 1) {
        cnt++;
      }
      if (arr[i + 9] == 1) {
        cnt++;
      }
      if (arr[i + 10] == 1) {
        cnt++;
      }
      if (arr[i + 11] == 1) {
        cnt++;
      }
    } else if (90 < i < 100) {
      if (arr[i - 1] == 1) {
        cnt++;
      }
      if (arr[i + 1] == 1) {
        cnt++;
      }
      if (arr[i - 10] == 1) {
        cnt++;
      }
      if (arr[i - 9] == 1) {
        cnt++;
      }
      if (arr[i - 11] == 1) {
        cnt++;
      }
    } else if (i % 10 == 0) {
      if (arr[i + 1] == 1) {
        cnt++;
      }
      if (arr[i + 10] == 1) {
        cnt++;
      }
      if (arr[i - 10] == 1) {
        cnt++;
      }
      if (arr[i + 11] == 1) {
        cnt++;
      }
      if (arr[i - 9] == 1) {
        cnt++;
      }
    } else if (i % 10 == 9) {
      if (arr[i - 1] == 1) {
        cnt++;
      }
      if (arr[i + 10] == 1) {
        cnt++;
      }
      if (arr[i - 10] == 1) {
        cnt++;
      }
      if (arr[i - 11] == 1) {
        cnt++;
      }
      if (arr[i + 9] == 1) {
        cnt++;
      }
    } else {
      if (arr[i - 1] == 1) {
        cnt++;
      }
      if (arr[i + 1] == 1) {
        cnt++;
      }
      if (arr[i - 10] == 1) {
        cnt++;
      }
      if (arr[i - 9] == 1) {
        cnt++;
      }
      if (arr[i - 11] == 1) {
        cnt++;
      }
      if (arr[i + 9] == 1) {
        cnt++;
      }
      if (arr[i + 10] == 1) {
        cnt++;
      }
      if (arr[i + 11] == 1) {
        cnt++;
      }
    }
    gameTiles[i].innerHTML = `<p class="tile-text">${cnt}</p>`;
    console.log(i, cnt);
  }
}

for (i = 0; i < 100; i++) {
  gameTiles[i].addEventListener("click", (e) => {
    let idx = e.target.classList[1];
    idx--;
    console.log(idx);
    if (arr[idx] == 1) {
      var bombs = document.querySelectorAll("tile-text");
      for (j = 0; j < 100; j++) {
        gameTiles[j].children[0].style.visibility = "visible";
      }
      alert("Found A mine ! Game over");
      location.reload();
    } else {
      if (!isclicked[idx]) currentscore++, (isclicked[idx] = 1);
      gameTiles[idx].children[0].style.visibility = "visible";
      document.querySelector(".score").innerHTML = currentscore;
      gameTiles[idx].style.color = "black";
    }
  });
}
function displayAllMines() {
  document.querySelectorAll(".tile").style.color = "black";
  return;
}
layMines();
initGame();

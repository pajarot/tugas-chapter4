console.log("run");

const playerBatu = document.querySelector(".player-side-item .batu");
const playerKertas = document.querySelector(".player-side-item .kertas");
const playerGunting = document.querySelector(".player-side-item .gunting");
const playerSideItems = document.querySelectorAll(".player-side-item");
const computerSideItems = document.querySelectorAll(".com-side-item");
const vsSide = document.querySelector(".vs-side");
const playerWinSide = document.querySelector(".player-win-side");
const comWinSide = document.querySelector(".com-win-side");
const drawSide = document.querySelector(".draw-side");
const refreshButton = document.querySelector(".refresh img");

function removeListItemActive(items) {
  for (const item of items) {
    item.children.item(0).classList.remove("active");
  }
}

function computerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  removeListItemActive(computerSideItems);
  computerSideItems.item(randomChoice).children.item(0).classList.add("active");
  return randomChoice;
}

function playerChoice(playerChoiceItem) {
  computerChoice();
  const computerChoiceItem = computerChoice();
  switch (playerChoiceItem + computerChoiceItem) {
    case "batu2":
    case "kertas0":
    case "gunting1":
      vsSide.classList.add("none");
      playerWinSide.classList.remove("none");
      comWinSide.classList.add("none");
      drawSide.classList.add("none");
      break;
    case "batu1":
    case "kertas2":
    case "gunting0":
      vsSide.classList.add("none");
      playerWinSide.classList.add("none");
      comWinSide.classList.remove("none");
      drawSide.classList.add("none");
      break;
    case "batu0":
    case "kertas1":
    case "gunting2":
      vsSide.classList.add("none");
      playerWinSide.classList.add("none");
      comWinSide.classList.add("none");
      drawSide.classList.remove("none");
      break;
  }
}

function mainGame() {
  playerBatu.addEventListener("click", function (e) {
    e.preventDefault();
    removeListItemActive(playerSideItems);
    playerBatu.classList.add("active");
    playerChoice("batu");
  });

  playerKertas.addEventListener("click", function (e) {
    e.preventDefault();
    removeListItemActive(playerSideItems);
    playerKertas.classList.add("active");
    playerChoice("kertas");
  });

  playerGunting.addEventListener("click", function (e) {
    e.preventDefault();
    removeListItemActive(playerSideItems);
    playerGunting.classList.add("active");
    playerChoice("gunting");
  });

  refreshButton.addEventListener("click", function (e) {
    e.preventDefault();
    removeListItemActive(playerSideItems);
    removeListItemActive(computerSideItems);
    vsSide.classList.remove("none");
    playerWinSide.classList.add("none");
    comWinSide.classList.add("none");
    drawSide.classList.add("none");
  });
}

mainGame();

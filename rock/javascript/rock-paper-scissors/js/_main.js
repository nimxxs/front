console.log("rock-paper-scissors");
const computerList = document.querySelectorAll(".computer ul li");
const humanList = document.querySelectorAll(".human ul li");
const resultList = document.querySelector(".result ul");
const appendItems = function (className) {
  const appendItem = document.createElement("li");
  appendItem.classList.add(className);
  appendItem.textContent = className.substring(0, 1);
  resultList.appendChild(appendItem);
};
let computerChoice = 0;
// console.log("🚀 ~ file: main.js:3 ~ computerList:", computerList);
const makeRandom = () => {
  computerList[0].style.display = "none";
  computerList[1].style.display = "none";
  computerList[2].style.display = "none";
  computerChoice = Math.floor(Math.random() * 3);
  computerList[computerChoice].style.display = "block";
};

// humanList[0].addEventListener("click", () => {
//   clearInterval(computerIdx);
// });

// 위에껄 반복문돌리기 ~
let i = 0;
let gameIdx = 0;
humanList.forEach((item, idx) => {
  item.addEventListener("click", () => {
    i++;
    clearInterval(computerIdx);
    if (i >= 3) {
      clearTimeout(gameIdx);
    } else {
      gameIdx = setTimeout(() => {
        computerIdx = setInterval(makeRandom, 50);
      }, 1000);
    }

    if (idx === computerChoice) {
      appendItems("draw");
    } else if (idx === 0 && computerChoice === 1) {
      appendItems("lose");
    } else if (idx === 1 && computerChoice === 2) {
      appendItems("lose");
    } else if (idx === 2 && computerChoice === 0) {
      appendItems("lose");
    } else {
      appendItems("win");
    }
    // console.log(idx);
    // console.log(computerChoice);
  });
});

let computerIdx = setInterval(makeRandom, 50); // clearInterval
makeRandom();

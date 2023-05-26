// 1. computer li 2개중에 하나만 보이게 하기
// 2. computer li를 무작위로 나오게 setInterval 만들기
// 3. 밑에 human li에 이벤트 걸기
// 4. human li 클릭했을 때 멈추게 하기. ->clearInterval
// 5. 승패 확인하기

const computerList = document.querySelectorAll(".computer ul li");
const humanList = document.querySelectorAll(".human ul li");
const resultList = document.querySelector(".result ul");
const li = document.createElement("li");
li.textContent = "W";
li.classList.add("win");
resultList.append(li);
let computerChoice = 0;
const makeRandom = function () {
  computerList[0].style.display = "none";
  computerList[1].style.display = "none";
  computerList[2].style.display = "none";
  computerChoice = Math.floor(Math.random() * 3); //0~3 사이의 실수들이 나오는데 정수만 나와야 하니까 Math.floor를 사용
  computerList[computerChoice].style.display = "block";
};
const computerIdx = setInterval(makeRandom, 100);
makeRandom();
humanList.forEach((item, idx) => {
  console.log(item);
  console.log(idx);
});
humanList[0].addEventListener("click", function () {
  clearInterval(computerIdx);
  if (idx === computerChoice) {
    appendItems("draw");
  } else if ((idx === 0 && computerChoice === 1) || (idx === 1 && computerChoice === 2) || (idx === 2 && computerChoice === 0)) {
    appendItems("lose");
  } else {
    appendItems("win");
  }
});

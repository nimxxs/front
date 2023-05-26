const word = document.querySelector(".word");
const wordList = document.querySelector(".word-list ul");
// 1. 주어진 단어를 하나 넣는다. -> 배열에다 값을 넣고 그 중에 하나 골라서 뿌리면 됨
const wordArray = []; // 배열은 참조 reference
const firstWords = ["강아지", "소나기", "기상청", "청소부", "부잣집", "호랑이"];
// 5개 중에 하나 고르기
const firstWord = firstWords[Math.floor(Math.random() * firstWords.length)];

wordArray.push(firstWord);

const appendWord = (inputword) => {
  const li = document.createElement("li");
  li.textContent = inputword;
  wordList.append(li);
};

const fault = () => {
  word.value = "";
  gsap.from(".input-box", { x: 100, duration: 1, ease: "elastic.out(1, 0.2)" });
};

appendWord(firstWord);
// 2. word에 글자를 입력하고 enter 쳤을 때 마지막 단어의 마지막 글자랑 입력한 단어의 첫글자가 같은지 따져야함
word.addEventListener("keyup", (e) => {
  //   console.log(e);
  if (e.key === "Enter" || e.keyCode === 13) {
    if (word.value.length !== 3) {
      //   alert("3글자만 입력가능합니다.");
      fault();
    }
    //   console.log(word.value.substring(0, 1));
    //   console.log(word.value.charAt(0));
    const lastWord = document.querySelector(".word-list ul li:last-child").textContent;
    const lastChar = lastWord.substring(2);
    if (word.value.substring(0, 1) !== lastChar) {
      fault();
      return;
    }
    if (wordArray.includes(word.value)) {
      fault();
      return;
    }
    fetch(`https://opendict.korean.go.kr/api/search?key=F7D69D8E4CDDAEA3CAFE37DA3C613322&q=${word.value}&req_type=json`)
      .then((response) => response.json())
      .then((data) => {
        if (data.channel.total <= 0) {
          fault();
          word.value = "";
        } else {
          appendWord(word.value);
          word.value = ";";
        }
      });
  }
});

// 배열을 하나 만든다.
// 배열에 중복을 따져서 없으면 값을 입력한다.
// ajax
// fetch : 서버랑 통신할 때 쓰는 방법
const checkDic = (question) => {
  fetch(`https://opendict.korean.go.kr/api/search?key=F7D69D8E4CDDAEA3CAFE37DA3C613322&q=${question}&req_type=json`) // 백틱쓰고 변수는 ${question}로 바꿈
    // 한 줄 일 땐 {} 랑 return 생략 가능
    .then((response) => response.json())
    .then((data) => {
      return data.channel.total;
    });
};

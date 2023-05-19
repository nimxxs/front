// const menu01 = document.querySelector(".master-piece .menu li:nth-child(1)");
// const menu02 = document.querySelector(".master-piece .menu li:nth-child(2)");
// const menu03 = document.querySelector(".master-piece .menu li:nth-child(3)");
// menu01.addEventListener("click", function () {
//   alert("menu01을 눌렀습니다.");
// });
// menu02.addEventListener("click", callFunc () {});
// menu03.addEventListener("click", callFunc () {
//     alert("세 번째 창을 눌렀습니다.")});

// // 사용자가 이벤트를 발생시켰을 때 나중에 호출됨(call back)
// function callFunc() {
//   console.log("함수를 실행합니다.");
// }
// // callFunc();

const header = document.querySelector(".header");
const menu = document.querySelectorAll(".master-piece .menu li");
const gnbList = document.querySelectorAll(".gnb .list > li");
gnbList.forEach(function (item, idx) {
  item.addEventListener("mouseenter", function () {
    header.classList.add("on");
  });
  item.addEventListener("mouseleave", function () {
    header.classList.remove("on");
  });
});

// 일급 객체 : 함수를 변수에 할당할 수 있음
// 다른 함수를 인자(argument)로 전달 받을 수 있음
// 다른 함수의 결과로서 리턴 가능함
// bb();
// aa();

// function bb() {
//   console.log("함수 선언문입니다.");
// }

// const aa = function () {
//   console.log("함수 표현식입니다.");
// };

// const sum = function (a, b) {
//   return a + b;
// };
// // 밑 둘 다 같은 내용
// const sum = (a, b) => a + b;
// // 한줄일 때, 리턴과 중괄호 생략 가능
// console.log(sum(100, 100));

// // 밑에 둘 다 같은 내용
// const double = function (num) {
//   return num * 2;
// };
// // prettier-ignore
// const double = (num) => num*2;

const contentsList = document.querySelectorAll(".master-piece .contents li");

// 화살표 함수 (fat arrow function)
// menu.forEach( (item, idx) => {
menu.forEach(function (item, idx) {
  item.addEventListener("mouseenter", () => {
    // console.log(idx + "번째 입니다.");
    contentsList.forEach(function (item02, idx02) {
      item02.classList.remove("on");
    });
    const target = document.querySelector(`.master-piece .contents li:nth-child(${idx + 1})`);
    console.log(target);
    target.classList.add("on");
  });
  item.addEventListener("mouseleave", () => {
    contentsList.forEach((item02, idx02) => {
      item02.classList.remove("on");
    });
  });
});

const mainSwiper = new Swiper(".main-visual .mask", {
  speed: 600,
  loop: true,
  effect: "fade",
  navigation: {
    nextE1: ".main-visual .btns .btn-next",
    prevE1: ".main-visual .btns .btn-prev",
  },
  pagination: {
    el: ".main-visual .pagination",
    type: "fraction",
  },
});

//prettier-ignore
const swiper = new Swiper(".social .mask", {
  speed: 600,
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  // loopSlides: 10,
  navigation: {
    nextEl: ".social .btns .btn-next",
    prevEl: ".social .btns .btn-prev",
  },
  pagination: {
    el: ".social .pagination .inner",
    type: "progressbar",
  },
});

// 진짜 배열은 아님 그러므로 배열의 메서드는 쓸 수 있음.
//console.log(menu);
// for (let i = 0; i < menu.length; i++) {
//   menu[i].addElementListener("click", function () {
//     alert(i + "번째 입니다.");
//   });
// }

// const fruits = ["apple", "melon", "peach"];

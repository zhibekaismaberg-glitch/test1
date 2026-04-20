// 1
const extractNumbers = (str) => {
  const result = str.match(/\d/g);
  return result ? result.map(Number) : [];
};

console.log(extractNumbers("a1fg5hj6"));

// 2
const fibonacci = (a = 0, b = 1) => {
  if (a > 144) return;
  console.log(a);

  setTimeout(() => {
    fibonacci(b, a + b);
  }, 1000);
};

fibonacci();

// 3
const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    data.forEach((product) => {
      console.log(product.title);
    });
  } catch (error) {
    console.log("Ошибка:", error);
  }
};

getProducts();

// 4
const container = document.querySelector(".colors");

container.onclick = function (event) {
  if (event.target.tagName === "BUTTON") {
    document.body.style.backgroundColor = event.target.innerText;
  }
};

// 5
const toggleBtn = document.getElementById("toggleBtn");
const box = document.getElementById("box");

toggleBtn.onclick = function () {
  box.classList.toggle("hidden");
};

// 6
const counter = document.querySelector(".count");

let i = 0;

const interval = setInterval(function () {
  i++;
  counter.innerText = i;

  if (i === 100) {
    clearInterval(interval);
  }
}, 400);

// 7
const getDataBtn = document.querySelector("#btn");

getDataBtn.onclick = async function () {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Ошибка:", error);
  }
};

// 8
const input = document.getElementById("loginInput");
const checkBtn = document.getElementById("checkBtn");
const userCard = document.getElementById("userCard");
const message = document.getElementById("message");

const users = [
  {
    login: "admin",
    role: "Администратор",
    email: "admin@gmail.com",
    image: ""
  },
  {
    login: "user",
    role: "Пользователь",
    email: "user@gmail.com",
    image: ""
  }
];









/* // 1

const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345")); 
console.log(containsOnlyDigits("12a45"));

// 2

setInterval(() => {
    console.log('Прошла секунда')
}, 1000); 


// 3


const count = () => {
  let i = 1;

  const interval = setInterval(() => {
    console.log(i);

    if (i === 10) {
      clearInterval(interval);
    }
    i++;
  }, 1000);
};

count();

// 4

const timeElement = document.querySelector('#time');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let time = 10;
let timer = null;


startBtn.onclick = function () {
  if (timer !== null) return; 

  timer = setInterval(function () {
    time--;
    timeElement.innerText = time;

    if (time === 0) {
      clearInterval(timer);
      timer = null;
    }
  }, 1000);
};

stopBtn.onclick = function () {
  clearInterval(timer);
  timer = null;
};

resetBtn.onclick = function () {
  clearInterval(timer);
  timer = null;
  time = 10;
  timeElement.innerText = time;
};

// 5

const block = document.getElementById('myBlock');

block.addEventListener('click', () => {
    this.classList.toggle('active');
});

// 6

const xhr = new XMLHttpRequest();

xhr.open("GET", "../data/converter.json");

xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);
};

xhr.send();
 */
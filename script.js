// 1

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

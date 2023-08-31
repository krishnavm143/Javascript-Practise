// let counter = 0;
// const getData = () => {
//   console.log('key', counter++);
// };

// const debounce = function (fn, delay) {
//   let timer;
//   return function () {
//     let context = this;
//     args = arguments;
//     clearTimeout(timer)
//     timer=setTimeout(() => {
//       fn.apply(context, arguments);
//     }, delay);
//   };
// };

// function myDebounce(call, d) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout();
//     timer = setTimeout(() => {
//       call();
//     }, d);
//   };
// }
// const betterFunction = myDebounce(getData, 300);

const btn = document.querySelector('#click-btn');
const normal = document.querySelector('.normal');
const wait = document.querySelector('.wait');
let normalcounter = 0;
let waitCount = 0;
// const myDebounce = (fn, d) => {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn();
//     }, d);
//   };
// };
// const debounceCount = myDebounce(() => {
//   waitCount += 1;
//   wait.innerHTML = waitCount;
// },1000);

const myThrottle = (fn, d) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    console.log(now);
    if (now - last < d) return;
    last = now;
    return fn(...args);
  };
};
var throttleCount = myThrottle(() => {
  waitCount += 1;
  wait.innerHTML = waitCount;
}, 1000);
btn.addEventListener('click', () => {
  normalcounter += 1;
  normal.innerHTML = normalcounter;
  //   debounceCount();
  throttleCount();
});

let arr = ['kitty', 'krishna', 'vishwanath'];

let obj1 = {
  name: 'kitty',
  cit: 'bidar',
  getIntro: function () {
    console.log(`Hello ${name}`);
  },
};
// protoype:It is just a object that is attached to evry object and array which is created
// arr.__proto__===Array.prototype
// when we creat an arry it has its prototype and array.prototupe has a prototypr
// arr.__proto__.__proto__===Object.prototype
// obj.__proto__.__proto__ is null
// function.__proto__.__proto__===Object.prototype

let obj2 = {
  name: 'krishna',
};

obj2.__proto__ = obj1;

console.log('hellwo ');
// rest operator in array
// Rest operator allows to accpt hte function infinte number arguments as an array
// function addNumber(...other){
//     console.log(other)// here o/p is [1,2,3,4,5,6]
// }

// const add=addNumber(1,2,3,4,5,6)

//Spread Operator in array

// function getNames(name1,name2,name3){
//     console.log(name1,name2,name3)
// }
// var names=['kitty','manoj','nagesh','ajay']
// getNames(...names)//by spread operator the array gets expaned to be a individula values

// rest operator in objects
// const {fname,lname,...rests}={
//     fname:'kitty',
//     lname:'vm',
//     age:21,
//     hobbies:['circket','footbal']
// }
// console.log(fname,lname,rests) //kitty vm {age: 21, hobbies: Array(2)}age: 21hobbies: (2) ['circket', 'footbal']

// const f1student={
//     fname:'kitty',
//     lname:'vm',
//     age:21,
//     hobbies:['circket','footbal']
// }
// const d={...f1student,age:31}
// console.log(d)

// Closure
// var sum = function (a) {
//   console.log('Hello ' + a);
//   var c = 10;
//   return function (b) {
//     console.log(`a ${a} b${b} c${c}`);
//     return a + b + c;
//   };
// };
// const store = sum(10);
// const add = store(10);
// console.log(add)

// const sum =function (a,b,c){
//     return{
//         getSumTwo:function(){
//             return a+b
//         },
//         getSumThree:function(){
//             return a+b+c
//         }
//     }
// }
// }
// const store=sum(1,2,3)
// console.log(store)

// Call

// const userDetails = {
//   name: 'krishna',
//   age: 27,
// };
// const printDetails = function (state, country) {
//   console.log(`Hello this is ${this.name} from ${state} ${country}`);
// };

// printDetails.call(userDetails);

// const userDetails1 = {
//   name: 'krishna sheelvant',
//   age: 30,
// };

// printDetails.call(userDetails1, 'Bidar', 'India');//takes the input as parametrr for the  function generice function
// printDetails.apply(userDetails1, ['Bidar', 'India']);//takes the input as array

// const newFun = printDetails.bind(userDetails, 'bidar', 'india');
// console.log(newFun())
// newFun()

//higher order functions
// map filter reduce    

const companies = [
    {name: 'Google', category: 'Product based', start: 1981, end: 2004},
    {name: 'Apple', category: 'Product based', start: 1976, end: 2023},
    {name: 'Microsoft', category: 'Product based', start: 1975, end: 2023},
    {name: 'Amazon', category: 'E-commerce', start: 1994, end: 2023},
    {name: 'Facebook', category: 'Social media', start: 2004, end: 2023},
    {name: 'Tesla', category: 'Automotive', start: 2003, end: 2023},
    {name: 'Netflix', category: 'Entertainment', start: 1997, end: 2023},
    {name: 'Adobe', category: 'Software', start: 1982, end: 2023}
];

// companies.forEach((company)=>{
//     console.log(company)
// })



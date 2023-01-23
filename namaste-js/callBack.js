// setTimeout(function(){
// console.log('this is callback fucntion')
// },5000)

// function x(y){
//     console.log('x')
//     y()
// }

// x(function y(){
//     console.log('y')
// })

function eventListener()
{
    let count=0
    document.getElementById("clickMe").addEventListener('click',function xyz(){
    console.log('button clicked!',++count)
})}

eventListener()
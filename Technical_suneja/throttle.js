function mythrottle(fn, d) {
  return function (...args) {
    // document.getElementById('click-btn').disabled=true
   setTimeout(()=>{
    fn()
   },d)
  };
}

let count=0
const newFunc = mythrottle(() => {
    // document.getElementById('click-btn').disabled=false
  console.log('user types',count++);
}, 300);

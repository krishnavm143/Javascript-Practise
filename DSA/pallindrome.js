const isPallindrome = (num) => {
  return num === +num.toString().split('').reverse().join('');
};
console.log(isPallindrome(12));

// anagram
// hello->elloh
// 1 length
function isAnagram(s, t) {
  let s1 = s.split('').sort().join();
  let t1 = t.split('').sort().join();
  return s1.length === t1.length ? s1 === t1 : false;
}

console.log(isAnagram('anagram', 'nagaram'));

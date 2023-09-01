const isAnagram = (s, t) => {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');
  return s.length === t.length ? s === t : false;
};
console.log(isAnagram('anagram', 'nagaram'));

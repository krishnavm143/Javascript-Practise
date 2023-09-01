const freq = {};

const arr = [1, 3, 4, 1, 3, 4, 5, 5, 6, 1, 2, 3, 1, 2];

for (const element of arr) {
  if (element in freq) {
    freq[element] = freq[element] + 1;
  } else {
    freq[element] = 1;
  }
}
console.log(freq);
for (const element in freq) {
  console.log(`${element} : ${freq[element]}`);
}

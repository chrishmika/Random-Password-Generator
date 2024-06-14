//to generate password
function generatePsw() {}
const capitalsChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "D",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
];

const charCount = capitalsChar.length;
console.log(charCount);

console.log(capitalsChar[Math.floor(Math.random() * 100) % charCount]);
console.log(capitalsChar[Math.floor(Math.random() * 100) % charCount].toLowerCase());
console.log(Math.floor(Math.random() * 100) % 26);

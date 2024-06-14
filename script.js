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

function generatePsw() {
  var charLengthGiven = Number(document.getElementsByClassName("passwordLength")[0].value);
  const values = document.getElementsByClassName("passwordOut");
  const charVarient = document.getElementsByName("charVarient");
  const charCount = capitalsChar.length;
  var newPassword = "";
  //   for (const item of values) {
  //     item.value = "";
  //   }

  if (charLengthGiven > 25 || charLengthGiven < 2) {
    for (const item of values) {
      item.value = "Max Lenght is 2 - 25 !!!";
    }
  } else {
    charVarient.forEach((item) => {
      if (item.checked && item.value == "useSimple") {
        for (const item of values) {
          while (charLengthGiven > 0) {
            newPassword = newPassword + capitalsChar[Math.floor(Math.random() * 100) % charCount].toLowerCase();
            charLengthGiven = charLengthGiven - 1;
          }
          item.value = newPassword;
        }
        console.log(item.value);
      } else if (item.checked && item.value == "useCapital") {
        for (const item of values) {
          while (charLengthGiven > 0) {
            newPassword = newPassword + capitalsChar[Math.floor(Math.random() * 100) % charCount];
            charLengthGiven = charLengthGiven - 1;
          }
          item.value = newPassword;
        }
        console.log(item.value);
      } else if (item.checked && item.value == "useMix") {
        for (const item of values) {
          item.value = "";
        }
        console.log(item.value);
      }
    });
  }
}

// const charCount = capitalsChar.length;
// console.log(charCount);

// console.log(capitalsChar[Math.floor(Math.random() * 100) % charCount]);
// console.log(capitalsChar[Math.floor(Math.random() * 100) % charCount].toLowerCase());
// console.log(Math.floor(Math.random() * 100) % 26);

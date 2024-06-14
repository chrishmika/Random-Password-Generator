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
  var newPassword = "";
  var charLengthGiven = Number(document.getElementsByClassName("passwordLength")[0].value);
  const values = document.getElementsByClassName("passwordOut");
  const charVarient = document.getElementsByName("charVarient");
  const charCount = capitalsChar.length;

  if (charLengthGiven > 25 || charLengthGiven < 2) {
    for (const item of values) {
      item.value = "Max Lenght is 2 - 25 !!!";
    }
  } else {
    charVarient.forEach((item) => {
      //for simple letter is checked
      if (item.checked && item.value == "useSimple") {
        for (const item of values) {
          while (charLengthGiven > 0) {
            newPassword = newPassword + capitalsChar[Math.floor(Math.random() * 100) % charCount].toLowerCase();
            charLengthGiven = charLengthGiven - 1;
          }
          item.value = newPassword;
        }
      } else if (item.checked && item.value == "useCapital") {
        //for capital letter is checked
        for (const item of values) {
          while (charLengthGiven > 0) {
            newPassword = newPassword + capitalsChar[Math.floor(Math.random() * 100) % charCount];
            charLengthGiven = charLengthGiven - 1;
          }
          item.value = newPassword;
        }
      } else if (item.checked && item.value == "useMix") {
        //for mix letter is checked
        for (const item of values) {
          while (charLengthGiven > 0) {
            if (Math.floor((Math.random() * 10) % 2) == 0) {
              newPassword = newPassword + capitalsChar[Math.floor(Math.random() * 100) % charCount];
              charLengthGiven = charLengthGiven - 1;
            } else {
              newPassword = newPassword + capitalsChar[Math.floor(Math.random() * 100) % charCount].toLowerCase();
              charLengthGiven = charLengthGiven - 1;
            }
          }
          item.value = newPassword;
        }
      }
    });
  }
}

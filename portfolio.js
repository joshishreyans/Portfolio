const text1 = [
  "I am Shreyans Joshi, an aspiring web developer currently working on improving my javascript skills."
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  
  currentText = text1[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("text1").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000);
  } else {
    setTimeout(type, 200);
  }
})();

const text2 = []
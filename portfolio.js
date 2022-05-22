const texts = [
  "I am Shreyans Joshi, an aspiring web developer currently working on improving my javascript skills.",
  "I am also familiar with technologies like HTML, CSS, Reactjs and Node.js",
  "My favoured technical stack is the MERN stack.",
  "I also do content writing in my past time.",
  "I hope to someday become a proficient web developer.",
];

let index = 0,
  index2 = 0,
  index3 = 0,
  index4 = 0,
  index5 = 0;

let currentText = "",
  currentText2 = "",
  currentText4 = "",
  currentText5 = "";
let letter = "",
  letter2 = "",
  letter3 = "",
  letter4 = "",
  letter5 = "";

(function type() {
  currentText = texts[0];
  letter = currentText.slice(0, ++index);

  document.getElementById("text1").textContent = letter;
  if (letter.length === currentText.length) {
    index = 0;
  } else {
    setTimeout(type, 200);
  }
})();

(function type2() {
  currentText2 = texts[1];
  letter2 = currentText2.slice(0, ++index2);

  document.getElementById("text2").textContent = letter2;
  if (letter2.length === currentText2.length) {
    index2 = 0;
  } else {
    setTimeout(type2, 200);
  }
})();

(function type3() {
  currentText3 = texts[2];
  letter3 = currentText3.slice(0, ++index3);

  document.getElementById("text3").textContent = letter3;
  if (letter3.length === currentText3.length) {
    index3 = 0;
  } else {
    setTimeout(type3, 200);
  }
})();

(function type4() {
  currentText4 = texts[3];
  letter4 = currentText4.slice(0, ++index4);

  document.getElementById("text4").textContent = letter4;
  if (letter4.length === currentText4.length) {
    index4 = 0;
  } else {
    setTimeout(type4, 200);
  }
})();

(function type5() {
  currentText5 = texts[4];
  letter5 = currentText5.slice(0, ++index5);

  document.getElementById("text5").textContent = letter5;
  if (letter5.length === currentText5.length) {
    index5 = 0;
  } else {
    setTimeout(type5, 200);
  }
})();

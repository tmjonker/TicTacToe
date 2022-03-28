let clickCounter = 0;
let inputClicked = [false, false, false, false, false, false, false, false, false];
let inputArray = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
let printParagraph = document.getElementById("print");

function alertFunction (player) {
  if (!player.includes("TIE")) {
    printParagraph.innerHTML = player + " wins!";
    alert(player + " wins!");
  } else {
    printParagraph.innerHTML = "TIE!";
    alert(player + "!!");
  }
  for (let i = 0; i < inputArray.length; i++) {
    let currentInput = document.getElementById(inputArray[i]);
    currentInput.disabled = true;
  }
}

function myFunc() {
  if (clickCounter >= 4) {
    for (let i = 0; i < inputArray.length; i += 3) {
      let testInput1 = document.getElementById(inputArray[i]).value;
      let testInput2 = document.getElementById(inputArray[i + 1]).value;
      let testInput3 = document.getElementById(inputArray[i + 2]).value;

      if (testInput1 === "Y" && testInput1 === testInput2 && testInput2 === testInput3) {
        alertFunction(testInput1);
      } else if (testInput1 === "X" && testInput1 === testInput2 && testInput2 === testInput3) {
        alertFunction(testInput1);
      } else if (i === 0) {
        testInput2 = document.getElementById(inputArray[i + 4]).value;
        testInput3 = document.getElementById(inputArray[i + 8]).value;
        if (testInput1 === "Y" && testInput1 === testInput2 && testInput2 === testInput3) {
          alertFunction(testInput1);
        } else if (testInput1 === "X" && testInput1 === testInput2 && testInput2 === testInput3) {
          alertFunction(testInput1);
        }
      } else if (i === 3) {
        testInput2 = document.getElementById(inputArray[i - 3]).value;
        testInput3 = document.getElementById(inputArray[i + 3]).value;
        if (testInput1 === "Y" && testInput1 === testInput2 && testInput2 === testInput3) {
          alertFunction(testInput1);
        } else if (testInput1 === "X" && testInput1 === testInput2 && testInput2 === testInput3) {
          alertFunction(testInput1);
        }
      } else if (i === 6) {
        testInput2 = document.getElementById(inputArray[i - 2]).value;
        testInput3 = document.getElementById(inputArray[i - 4]).value;
        if (testInput1 === "Y" && testInput1 === testInput2 && testInput2 === testInput3) {
          alertFunction(testInput1);
        } else if (testInput1 === "X" && testInput1 === testInput2 && testInput2 === testInput3) {
          alertFunction(testInput1);
        }
      }
    }

    for (let i = 1; i < 3; i++) {
      let testInput1 = document.getElementById(inputArray[i]).value;
      let testInput2 = document.getElementById(inputArray[i + 3]).value;
      let testInput3 = document.getElementById(inputArray[i + 6]).value;
      if (testInput1 === "Y" && testInput1 === testInput2 && testInput2 === testInput3) {
        alertFunction(testInput1);
      } else if (testInput1 === "X" && testInput1 === testInput2 && testInput2 === testInput3) {
        alertFunction(testInput1);
      } else {
        if (clickCounter === 9) {
          alertFunction("TIE");
        }
      }
    }
  }
}

function myFunc_1() {
  let b1 = document.getElementById("b1");
  b1.style.backgroundColor = "lightgray";
  if (inputClicked[0] === false) {
    if (clickCounter % 2 === 0) {
      b1.value = "X";
      inputClicked[0] = true;
      printParagraph.innerHTML = "Player Y Turn";
    } else {
      b1.value = "Y";
      inputClicked[0] = true;
      printParagraph.innerHTML = "Player X Turn";
    }

    clickCounter++;
  }
}

function myFunc_2() {
  let b2 = document.getElementById("b2");
  b2.style.backgroundColor = "lightgray";
  if (inputClicked[1] === false) {
    if (clickCounter % 2 === 0) {
      b2.value = "X";
      inputClicked[1] = true;
      printParagraph.innerHTML = "Player Y Turn";
    } else {
      b2.value = "Y";
      inputClicked[1] = true;
      printParagraph.innerHTML = "Player X Turn";
    }
    clickCounter++;
  }
}

function myFunc_3() {
  let b3 = document.getElementById("b3");
  b3.style.backgroundColor = "lightgray";
  if (inputClicked[2] === false) {
    if (clickCounter % 2 === 0) {
      b3.value = "X";
      inputClicked[2] = true;
      printParagraph.innerHTML = "Player Y Turn";
    } else {
      b3.value = "Y";
      inputClicked[2] = true;
      printParagraph.innerHTML = "Player X Turn";
    }
    clickCounter++;
  }
}

function myFunc_4() {
  let b4 = document.getElementById("b4");
  b4.style.backgroundColor = "lightgray";
  if (inputClicked[3] === false) {
    if (clickCounter % 2 === 0) {
      b4.value = "X";
      inputClicked[3] = true;
      printParagraph.innerHTML = "Player Y Turn";
    } else {
      b4.value = "Y";
      inputClicked[3] = true;
      printParagraph.innerHTML = "Player X Turn";
    }
    clickCounter++;
  }
}

function myFunc_5() {
  let b5 = document.getElementById("b5");
  b5.style.backgroundColor = "lightgray";
  if (inputClicked[4] === false) {
    if (clickCounter % 2 === 0) {
      b5.value = "X";
      inputClicked[4] = true;
      printParagraph.innerHTML = "Player Y Turn";
    } else {
      b5.value = "Y";
      inputClicked[4] = true;
      printParagraph.innerHTML = "Player X Turn";
    }
    clickCounter++;
  }
}

function myFunc_6() {
  let b6 = document.getElementById("b6");
  b6.style.backgroundColor = "lightgray";
  if (inputClicked[5] === false) {
    if (clickCounter % 2 === 0) {
      b6.value = "X";
      inputClicked[5] = true;
      printParagraph.innerHTML = "Player Y Turn";
    } else {
      b6.value = "Y";
      inputClicked[5] = true;
      printParagraph.innerHTML = "Player X Turn";
    }
    clickCounter++;
  }
}

function myFunc_7() {
  let b7 = document.getElementById("b7");
  b7.style.backgroundColor = "lightgray";
  if (inputClicked[6] === false) {
    if (clickCounter % 2 === 0) {
      b7.value = "X";
      inputClicked[6] = true;
      printParagraph.innerHTML = "Player Y Turn";
    } else {
      b7.value = "Y";
      inputClicked[6] = true;
      printParagraph.innerHTML = "Player X Turn";
    }
    clickCounter++;
  }
}

function myFunc_8() {
  let b8 = document.getElementById("b8");
  b8.style.backgroundColor = "lightgray";
  if (inputClicked[7] === false) {
    if (clickCounter % 2 === 0) {
      b8.value = "X";
      inputClicked[7] = true;
      printParagraph.innerHTML = "Player Y Turn";
    } else {
      b8.value = "Y";
      inputClicked[7] = true;
      printParagraph.innerHTML = "Player X Turn";
    }
    clickCounter++;
  }
}

function myFunc_9() {
  let b9 = document.getElementById("b9");
  b9.style.backgroundColor = "lightgray";
  if (inputClicked[8] === false) {
    if (clickCounter % 2 === 0) {
      b9.value = "X";
      inputClicked[8] = true;
      printParagraph.innerHTML = "Player Y Turn";
    } else {
      b9.value = "Y";
      inputClicked[8] = true;
      printParagraph.innerHTML = "Player X Turn";
    }
    clickCounter++;
  }
}

function reset() {

  for (let i = 0; i < inputArray.length; i++) {
    let currentInput = document.getElementById(inputArray[i]);
    currentInput.style.backgroundColor = "white";
    currentInput.value = "";
    currentInput.disabled = false;
    inputClicked[i] = false;
  }
  printParagraph.innerHTML = "";
  clickCounter = 0;
}

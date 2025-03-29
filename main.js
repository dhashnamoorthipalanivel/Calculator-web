let outputScreen = document.querySelector("#outputScreen");

// key values (button)
function display(keyValue) {
  outputScreen.value += keyValue;
}

// Clear button
function clearBtn() {
  outputScreen.value = " ";
}
// Delete button
function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}

// Calculete functon => Operations
function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch {
    alert("Invalid");
  }
}

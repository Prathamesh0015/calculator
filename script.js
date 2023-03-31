function insert(char) {
  let result = document.getElementById("result");
  result.value = result.value + char;
}

function clearResult() {
  let result = document.getElementById("result");
  result.value = "";
}

function backspace() {
  let result = document.getElementById("result");
  result.value = result.value.slice(0, -1);
}

function calculate() {
  let result = document.getElementById("result");
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("Invalid calculation");
  }
}

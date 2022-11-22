let randomNumber;
let xAttempts;
let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
resetGame();

document.querySelector("#btnTry").addEventListener("click", handleClick);
document.querySelector("#btnReset").addEventListener("click", handleReset);
document.addEventListener("keydown", handleEnter);

function resetGame() {
  randomNumber = Math.round(Math.random() * 0);
  xAttempts = 1;
}

function changeScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleEnter(e) {
  if (e.key == "Enter") {
    screen1.classList.contains("hide") ? handleReset() : handleClick(e);
  }
}

function handleClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");
  console.log(inputNumber.value);
  if (inputNumber.value < 0 || inputNumber.value > 10) {
    inputNumber.setCustomValidity("Digite um número entre 0 e 10! ");
    inputNumber.reportValidity();
  } else {
    if (randomNumber == inputNumber.value) {
      xAttempts > 1
        ? (document.querySelector(
            "h2"
          ).innerText = `Acertou em ${xAttempts} tentativas!`)
        : (document.querySelector(
            "h2"
          ).innerText = `Acertou em ${xAttempts} tentativa!`);
      changeScreen();
    }
  }
  inputNumber.value = 0;
  xAttempts++;
}

function handleReset() {
  resetGame();
  changeScreen();
}

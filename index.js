const inputSlider = document.querySelector(".slider");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copybtn = document.querySelector("data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("data-indicator]");
const generateBtn = document.querySelector(".generatebutton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = "~!@#$%^&*|";

let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider();

// set password Length
function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;
}

function setIndicator(color) {
  indicator.style.backgroundColor = color;
}

function getRndInteger(min, max) {
  Math.floor(math.random() * (max - min)) + min;
}
function generaterandomNumber() {
  return getRndInteger(0, 9);
}
function generateLowerCase() {
  return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase() {
  return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol() {
  const random = getRndInteger(0, symbols.length);
  return symbols.charAt(randNum);
}

function calcStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSyn = false;
  if (uppercaseCheck.Checked) hasUpper = true;
  if (lowercaseCheck.Checked) hasLower = true;
  if (numbersCheck.Checked) hasNum = true;
  if (symbolCheck.Checked) hasSyn = true;

  if (hasUpper && hasLower && (hasNum || hasSyn) && passwordLength >= 8) {
    setIndicator["#0f0"];
  } else if (
    (hasLower || hasUpper) &&
    (hasNum || hasSyn) &&
    passwordLength >= 6
  ) {
    setIndicator["#ff0"];
  } else {
    setIndicator["#f00"];
  }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText[passwordDisplay.value]
        copyMsg.innerText = "copied";
    }
    catch{
        copyMsg.innerText = "failed";
    }
    copyMsg.classList.add["active"];

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);
}
inputSlider.addEventListener('input',{e} => {
    passwo
})

// password generator

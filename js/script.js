const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");
const balance = document.getElementById("balance");
let withdrawInput = document.getElementById("withdraw-input");
const withdrawAmount = withdrawInput.value;
const withdrawBtn = document.getElementById("withdraw-btn");
let depositInput = document.getElementById("deposit-input");
const depositBtn = document.getElementById("deposit-btn");
const error = document.getElementById("error");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const error4 = document.getElementById("error4");

let depositInitial = 0;
let withdrawInitial = 0;
let balanceInitial = 1000;
depositBtn.addEventListener("click", function () {
  //   deposit  & balance
  const depositAmount = parseFloat(depositInput.value);
  if (
    depositInput.value === "string" ||
    depositInput.value === "" ||
    depositInput.value === " "
  ) {
    error1.style.display = "inline";
    error.style.display = "none";
  } else if (depositInput.value < 0) {
    error.style.display = "inline";
    error1.style.display = "none";
  } else {
    depositInitial += depositAmount;
    deposit.innerText = depositInitial.toFixed(2);

    //  balance added

    balanceInitial += depositAmount;
    balance.innerText = balanceInitial.toFixed(2);
    depositInput.value = " ";
  }
});

// with enter

depositInput.addEventListener("keyup", function (e) {
  const depositAmount = parseFloat(depositInput.value);
  if (e.key === "Enter") {
    if (
      depositInput.value === "string" ||
      depositInput.value === "" ||
      depositInput.value === " "
    ) {
      error1.style.display = "inline";
      error.style.display = "none";
    } else if (depositInput.value < 0) {
      error.style.display = "inline";
      error1.style.display = "none";
    } else {
      depositInitial += depositAmount;
      deposit.innerText = depositInitial.toFixed(2);

      //  balance added

      balanceInitial += depositAmount;
      balance.innerText = balanceInitial.toFixed(2);
      depositInput.value = " ";
    }
  }
});
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = parseFloat(withdrawInput.value);
  if (
    withdrawInput.value === "string" ||
    withdrawInput.value === "" ||
    withdrawInput.value === " "
  ) {
    error3.style.display = "inline";
    error2.style.display = "none";
    error4.style.display = "none";
  } else if (depositInput.value < 0) {
    error2.style.display = "inline";
    error3.style.display = "none";
    error4.style.display = "none";
  } else if (withdrawAmount > balanceInitial) {
    error4.style.display = "inline";
  } else {
    error2.style.display = "none";
    error3.style.display = "none";
    error4.style.display = "none";
    withdrawInitial += withdrawAmount;
    withdraw.innerText = withdrawInitial.toFixed(2);
    balanceInitial -= withdrawAmount;
    balance.innerText = balanceInitial.toFixed(2);
    withdrawInput.value = " ";
  }
});
withdrawInput.addEventListener("keyup", function (event) {
  const withdrawAmount = parseFloat(withdrawInput.value);
  if (event.key === "Enter") {
    if (
      withdrawInput.value === "string" ||
      withdrawInput.value === "" ||
      withdrawInput.value === " "
    ) {
      error3.style.display = "inline";
      error2.style.display = "none";
      error4.style.display = "none";
    } else if (depositInput.value < 0) {
      error2.style.display = "inline";
      error3.style.display = "none";
      error4.style.display = "none";
    } else if (withdrawAmount > balanceInitial) {
      error4.style.display = "inline";
    } else {
      error2.style.display = "none";
      error3.style.display = "none";
      error4.style.display = "none";
      withdrawInitial += withdrawAmount;
      withdraw.innerText = withdrawInitial.toFixed(2);
      balanceInitial -= withdrawAmount;
      balance.innerText = balanceInitial.toFixed(2);
      withdrawInput.value = " ";
    }
  }
});
logout.addEventListener('click', function(){
  location.href="index.html"
})

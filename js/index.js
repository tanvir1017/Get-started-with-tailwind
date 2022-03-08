let depositButton = document.getElementById("deposit-button");
let withdrawButton = document.getElementById("withdraw-button");

withdrawButton.addEventListener("click", () => {
  const withdrawMoney = document.getElementById("withdraw-money");
  const withdrawField = document.getElementById("withdraw-field");
  console.log(withdrawField.value);
});

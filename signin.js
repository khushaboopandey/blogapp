let createAccount = document
  .getElementsByClassName("signUp-body")[0]
  .querySelector('p input[type="submit"]');

console.log(createAccount);

if (createAccount) {
  // Example: Change the background color
  createAccount.style.backgroundColor = "red";
}

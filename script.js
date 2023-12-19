let passwordBox = document.getElementById("password");
const length = 12;

function createPassword() {
  let password = "";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const numbers = "0123456789";
  const symbols = "!?;+-&_£#@()/*€¥$¢^°©®";

  password += upperCase[Math.floor(Math.random() * upperCase.length)]
  
 password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  password += numbers[Math.floor(Math.random() * numbers.length)]
  password += symbols[Math.floor(Math.random() * symbols.length)]
  let all = upperCase + lowerCase + numbers + symbols;
  while(length>password.length) {
    password += all[Math.floor(Math.random() * all.length)]
    
  }
  passwordBox.value = password;
  
}
const btn = document.querySelector('.gen-btn');
const passwordBox = document.getElementById('password')
const lengthPsw = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789" 
const specialChar = "!@#$%^&*()_+=-?/><"

const allChars = upperCase + lowerCase + numbers + specialChar;

btn.addEventListener('click', function(){
    let password = "";

    password += upperCase[Math.floor(Math.random * upperCase.length)];
    password += lowerCase[Math.floor(Math.random * lowerCase.length)];
    password += numbers[Math.floor(Math.random * numbers.length)];
    password += specialChar[Math.floor(Math.random * specialChar.length)];

    while(lengthPsw > password.length){
        password += allChars[Math.floor(Math.random * allChars.length)];
    }

    passwordBox.value = password;
})

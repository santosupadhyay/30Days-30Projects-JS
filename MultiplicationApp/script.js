const questionElement = document.querySelector('.question');

const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

let inputAns = document.querySelector('.input-text');

let formElement = document.querySelector('.container');

let scoreElement = document.querySelector('.score');
let score = JSON.parse(localStorage.getItem('score'));

scoreElement.innerText = `Score : ${score}`

questionElement.innerText = `${num1} multiply by ${num2} is equals to?`



formElement.addEventListener('submit', () => {
        let userAns = +inputAns.value;
        if (userAns === ''){
                alert('Please Do not leave it blank')
        }else{
                if (userAns === num1 * num2) {
                        score++;
                        updateLocalStorage();
                } else {
                        score--;
                        updateLocalStorage();
                }

        }
})

function updateLocalStorage() {
        localStorage.setItem('score', JSON.stringify(score));
}
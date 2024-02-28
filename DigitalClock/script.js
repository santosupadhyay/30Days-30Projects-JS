const hourElement = document.querySelector('.hours');
const minElement = document.querySelector('.minutes');
const secElement = document.querySelector('.seconds');
const ampmElement = document.querySelector('.ampm');


function updateClock() {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let ampm = 'AM'

        if( hour > 12 ){
                hour = hour -12;
                ampm = 'PM';
        }

        hourElement.innerText = hour;
        minElement.innerText = minutes;
        secElement.innerText = seconds;



        setTimeout(() => {
              updateClock();  
        }, 1000);


}

updateClock();
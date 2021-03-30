const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//Uma forma de fazer a transição para dark mode e light
// toggle.addEventListener('click', (e) => {
//     html.classList.toggle('dark');
//     if (html.classList.contains('dark')) {
//         e.target.innerHTML = 'Light mode';
//     } else {
//         e.target.innerHTML = 'Dark mode';
//     }
// });

// Outra forma de fazer usando ternário

toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    toggle.innerText = html.classList.contains('dark') ? 'Light mode' : 'Dark mode';
});



//Outra forma de fazer a transição para dark mode e light
// toggle.addEventListener('click', (e) => {
//     if(html.classList.constains('dark')) {
//         html.classList.remove('dark')
//         e.target.innerHTML = 'Dark mode'
//     } else {
//  html.classList.add('dark')
//     //  e.target.innerHTML = 'Light mode'   
// }
// });

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;

    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

//Map a range of numbers to another range of numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

setTime();
setInterval(setTime, 1000);
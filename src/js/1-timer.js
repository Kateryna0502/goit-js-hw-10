// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// import imageUrl from '../img/symbol-defs.svg';

// const refs = {
//   dateTime: document.querySelector('#datetime-picker'),
//   button: document.querySelector('[data-start]'),
//   timer: {
//     dataDays: document.querySelector('[data-days]'),
//     dataHours: document.querySelector('[data-hours]'),
//     dataMinutes: document.querySelector('[data-minutes]'),
//     dataSeconds: document.querySelector('[data-seconds]'),
//   },
// };

// let userSelectedDate;
// let initTimeId;

// refs.button.disabled = true;

// flatpickr('#datetime-picker', {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] < Date.now()) {
//       iziToast.show({
//         title: 'ERROR',
//         message: 'Please choose a date in the future',
//         backgroundColor: '#ef4040',
//         titleColor: '#fff',
//         titleSize: '16px',
//         messageColor: '#fff',
//         messageSize: '16px',
//         progressBarColor: '#B51B1B',
//         position: 'topRight',
//         iconUrl: imageUrl,
//         iconColor: '#FAFAFB',
//         imageWidth: 302,
//         theme: 'dark',
//       });
//     } else {
//       userSelectedDate = selectedDates[0];
//       refs.button.disabled = false;
//     }
//   },
// });

// refs.button.addEventListener('click', () => {
//   refs.button.disabled = true;
//   refs.dateTime.disabled = true;
//   initTimeId = setInterval(() => {
//     const currentTime = Date.now();

//     const diff = userSelectedDate - currentTime;
//     if (diff > 0) {
//       const time = convertMs(diff);
//       const str = addLeadingZero(time);
//     } else {
//       clearInterval(initTimeId);
//     }
//   }, 1000);
// });

// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     return { days, hours, minutes, seconds };
// }
//     function addLeadingZero({ days, hours, minutes, seconds }) {
//   days = days.toString().padStart(2, '0');
//   hours = hours.toString().padStart(2, '0');
//   minutes = minutes.toString().padStart(2, '0');
//   seconds = seconds.toString().padStart(2, '0');

//   return `${(refs.timer.dataDays.textContent =
//     days)},${(refs.timer.dataHours.textContent =
//     hours)}:${(refs.timer.dataMinutes.textContent =
//     minutes)}:${(refs.timer.dataSeconds.textContent = seconds)}`;
// }



import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const refs = {
    startBtn: document.querySelector('[data-start]'),
    jsTimer: document.querySelector('.js-timer'),
    inputDate: document.querySelector('#datetime-picker'),
}

let intervalId;

refs.startBtn.addEventListener('click', () => {
    const initTime = selectedDates[0] ;

    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const diff = initTime - currentTime;
        const time = convertMs(diff);
        const str = getTime(time);

        refs.jsTimer.textContent = str;
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, initTime - Date.now() - 1000);

      refs.startBtn.disabled = true;

});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function getTime({ days, hours, minutes, seconds }) {
    days = days.toString().padStart(2, '0');
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    
    return `${days}:${hours}:${minutes}:${seconds}`;
}


flatpickr("#datetime-picker", {
     enableTime: true,
    dateFormat: "Y-m-d H:i",

    onClose(selectedDates) {
    console.log(selectedDates[0]);
    },
    
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

});

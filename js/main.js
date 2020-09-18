const initTime = document.getElementById('initTime');
const startClock = document.querySelector('.startClock');
const showTime = document.querySelector('.showTime');
const starter = document.querySelector('.starter');

startClock.addEventListener('click', result);

function result() {
    showTime.style.visibility = 'visible';
    let startTime = initTime.value;
    //console.log(startTime);

    if (startTime) {
        // Break down startTime
        var hours = Number(startTime.slice(0, 2));
        var minutes = Number(startTime.slice(3, 5));
        var seconds = Number(startTime.slice(6, 8));
        var amPm = startTime.slice(9, 11);
        //console.log(hours, minutes, seconds, amPm);
    } else {
        startTime = new Date().toLocaleTimeString();
        //console.log(startTime);
        //console.log(startTime.length);
        if (startTime.length == 10) {
            var hours = Number(startTime.slice(0, 1));
            var minutes = Number(startTime.slice(2, 4));
            var seconds = Number(startTime.slice(5, 7));
            var amPm = startTime.slice(8, 10);
        } else {
            var hours = Number(startTime.slice(0, 2));
            var minutes = Number(startTime.slice(3, 5));
            var seconds = Number(startTime.slice(6, 8));
            var amPm = startTime.slice(9, 11);
        }

    }
    var myVar = setInterval(figTime, 1000);
    function figTime() {
        // formating the counter for display
        let displayTime = " ";
        if (hours < 10) {
            displayTime += "0" + hours + ":";
        } else {
            displayTime += hours + ":";
        }
        if (minutes < 10) {
            displayTime += "0" + minutes + ":";
        } else {
            displayTime += minutes + ":";
        }
        if (seconds < 10) {
            displayTime += "0" + seconds;
        } else {
            displayTime += seconds;
        }
        displayTime += " " + amPm;

        // display clock
        showTime.textContent = displayTime;
        //console.log(displayTime);

        // timer counts down
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        if (hours == 13) {
            hours = 1;
        }
        if (hours == 12 && minutes == 0 && seconds == 0) {
            if (amPm == 'AM') {
                amPm = 'PM';
            } else {
                amPm = 'AM';
            }
        }

    }




}
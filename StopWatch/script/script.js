window.onload = function() {
    let buttonStart = document.getElementById('start');
    let buttonStop = document.getElementById('stop');
    let buttonReset = document.getElementById('reset');
    let appendMinutes = document.getElementById('minutes');
    let appendSeconds = document.getElementById('seconds');
    let appendTens = document.getElementById('tens');
    let minutes = "00"
    let seconds = "00"
    let tens = "00"
    let interval

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(interval)
    }

    buttonReset.onclick = function() {
        clearInterval(interval)
        minutes = "00"
        seconds = "00"
        tens = "00"
        appendSeconds.innerHTML = seconds
        appendTens.innerHTML = tens
    }

    let startTimer= () => {
        tens++
        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens
        } 
        if (tens > 9) {
            appendTens.innerHTML = tens
        } 
        if (tens > 99) {
            seconds++
            appendSeconds.innerHTML = "0" + seconds 
            tens = 0;
            appendTens.innerHTML = '0' + 0;
        } 
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 60) {
            minutes++
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            tens = 0;
            appendSeconds.innerHTML = "0" + 0;
            appendTens.innerHTML = '0' + 0;
        }
        if (minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }
    }
}
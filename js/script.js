let hours = document.querySelector("#hour");
let minutes = document.querySelector("#minute");
let seconds = document.querySelector("#seconds");

setInterval(function () {
	let time = new Date();

	let hourValue = time.getHours();
	let minuteValue = time.getMinutes();
	let secondsValue = time.getSeconds();

	hours.innerHTML = hourValue;
	minutes.innerHTML = minuteValue;
	seconds.innerHTML = secondsValue;
    if(hours<10){
        hours = '0'+hours
    }
    if(seconds<10){
        seconds = '0'+seconds
    }
    if(minutes<10){
        minutes = '0'+minutes
    }
}, 1000);
xx
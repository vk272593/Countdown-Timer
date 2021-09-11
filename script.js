const daysE1 = document.getElementById('days')
const hoursE1 = document.getElementById('hours')
const minutesE1 = document.getElementById('minutes')
const secondE1 = document.getElementById('second')

 
 const newYears = "1 jan 2022";
function countDown() {
const newYearsDate = new Date(newYears);
const currentDate = new Date();
const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);
const days = Math.floor((totalSeconds / 3600) / 24 );
const hours = Math.floor((totalSeconds / 3600) % 24);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = Math.floor((totalSeconds % 3600) % 60);
daysE1.innerHTML=days
hoursE1.innerHTML=formatTime(hours)
minutesE1.innerHTML=formatTime(minutes)
secondE1.innerHTML=formatTime(seconds)

}
function formatTime(time){
    return time<10 ? `0${time}`:time;
}
//initial call
countDown();
setInterval(countDown,1000)
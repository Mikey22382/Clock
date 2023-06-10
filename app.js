const secondshand = document.getElementById("seconds-hands"), minuteshand = document.getElementById("minutes-hand"),
    hourshand = document.getElementById("hours-hand");

function getTime(){
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval= 6

    secondshand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    minuteshand.style.transform = 'rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)'
    hourshand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) * timeInterval + 'deg)'

}
setInterval(getTime, 100)

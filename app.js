function setDate(){
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const seconds = now.getSeconds()

    let secondHand = document.querySelector('.second-hand')
    const secondsDegrees = ((seconds / 60) * 360) + 90 //90 added to offset 90deg styling
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    let minuteHand = document.querySelector('.min-hand')
    const minuteDegrees = ((minute / 60) * 360) + 90
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

    let hourHand = document.querySelector('.hour-hand')
    const hoursDegrees = ((hour / 60) * 360) + 90 
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)
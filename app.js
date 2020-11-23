const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    // Second Hand
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    
    // Min Hand

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360);
    minHand.style.transform = `rotate(${minsDegrees}deg)`

    // Hour Hand

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360 );
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate,1000);
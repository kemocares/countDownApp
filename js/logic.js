var startBut = document.getElementById('start')
startBut.addEventListener('click', function(){
 setTime()  
})
var timeEl = document.querySelector("#time");

// Selects element by id


var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      
    }

  }, 1000);
}
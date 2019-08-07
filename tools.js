function rand(upperLimit, x){
  let lowerLimit = x

  if (x === undefined){
    lowerLimit = 0;
  } else {
    upperLimit -= lowerLimit;
  }
  return (Math.floor(Math.random() * upperLimit) + lowerLimit)
}

var click = 0;

var isPaused = false;

const interval = 500

var timer = setInterval(doStuff, interval);

function doStuff() {
  year += 1;
  document.getElementById("year").innerHTML = "Year: " + year;
}

function stopStuff() {
  clearInterval(timer);
}

window.onkeydown = function(event) {
  var keyPr = event.keyCode; //Key code of key pressed


  if (keyPr === 32){
    if (isPaused === false){
      isPaused = true;
      document.getElementById("paused").innerHTML = "Paused"
      stopStuff();
    } else {        
      isPaused = false;
      document.getElementById("paused").innerHTML = "Playing"
      timer = setInterval(doStuff, interval);
    }
  }
};
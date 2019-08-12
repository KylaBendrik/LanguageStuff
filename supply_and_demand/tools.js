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
const interval = 50;


var timer = setInterval(doStuff, interval);

function doStuff() {
  day += 1;
  if (day === 31){
    month += 1;
    day = 1;
    if (month < 13){newWeather();}
    
  }
  if (month === 13){
    year += 1;
    month = 1;
    newWeather();
    day = 1;
  }
  printWorld()


  houses.forEach(function(house){
    eatFood(house);
  })
  printColony();
  printPop();
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
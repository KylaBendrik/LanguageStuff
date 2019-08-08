//How many families in our colony?
let startingNum = 2;
let population = [];
let day = 1;
let month = 1;
let year = 0;

function initColony(){
  var i;
  for (i=0; i < startingNum; i++){
    population.push(newPerson(1));
    population.push(newPerson(0));
  }
}

//eight or nine bushels of grain represented the average yield of an acre

function printColony(){
  let popDiv = document.getElementById("popDiv");
  let popPrint = document.createElement("span")

  popPrint.appendChild(document.createTextNode("Population: " + population.length))

  popDiv.appendChild(popPrint)
}

initColony();

printColony();
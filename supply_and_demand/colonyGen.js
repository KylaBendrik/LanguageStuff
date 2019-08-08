//How many families in our colony?
let startingNum = 2;
let population = [];
let houses = [];
let day = 1;
let month = 1;
let year = 20;

function initColony(){
  initHouses();
}

//eight or nine bushels of grain represented the average yield of an acre

function printColony(){
  popDiv.innerHTML = "Population: " + population.length
}

function printGender(gender){
  if (gender === 1){
    return "male"
  } else {
    return "female"
  }
}

function printPop(){
  let tbody = document.getElementById("popTbody");
  let newTbody = document.createElement("tbody")
  population.forEach(function(person){
    let row = document.createElement("tr")

    let CellId = document.createElement("td")
    let CellGender = document.createElement("td")
    let CellBirthDay = document.createElement("td")

    CellId.appendChild(document.createTextNode(person.id));
    CellGender.appendChild(document.createTextNode(printGender(person.gender)));
    CellBirthDay.appendChild(document.createTextNode(person.birth.month + "/" + person.birth.day + "/" + person.birth.year));

    row.appendChild(CellId)
    row.appendChild(CellGender)
    row.appendChild(CellBirthDay)


    newTbody.appendChild(row)
  })

  newTbody.id = "popTbody"
  tbody.parentNode.replaceChild(newTbody, tbody)
  return tbody;

}

initColony();

printColony();
printPop();


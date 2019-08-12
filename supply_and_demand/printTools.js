function printWorld(){
  document.getElementById("year").innerHTML = month + "/" + day + "/" + year;
  document.getElementById("weather").innerHTML = "Temp: " + weather.temperature + "° F, Rain " + weather.rain + "mm";
}

function printPop(){
  let tbody = document.getElementById("popTbody");
  let newTbody = document.createElement("tbody")
  population.forEach(function(person){
    let row = document.createElement("tr")

    let CellId = document.createElement("td")
    let CellGender = document.createElement("td")
    let CellBirthDay = document.createElement("td")
    let CellJob = document.createElement("td")
    let CellHouse = document.createElement("td")
    let CellAcres = document.createElement("td")
    let CellBarley = document.createElement("td")

    CellId.appendChild(document.createTextNode(person.id));
    CellGender.appendChild(document.createTextNode(printGender(person.gender)));
    CellBirthDay.appendChild(document.createTextNode(person.birth.month + "/" + person.birth.day + "/" + person.birth.year));
    CellJob.appendChild(document.createTextNode(jobs[person.job]));
    CellHouse.appendChild(document.createTextNode(printHouse(person.house)));
    CellAcres.appendChild(document.createTextNode(printAcres(person.house)));
    CellBarley.appendChild(document.createTextNode(houses[person.house].resources.food.barley.toFixed(2) + " bushels Barley"));


    row.appendChild(CellId)
    row.appendChild(CellGender)
    row.appendChild(CellBirthDay)
    row.appendChild(CellJob)
    row.appendChild(CellHouse)
    row.appendChild(CellAcres)
    row.appendChild(CellBarley)


    newTbody.appendChild(row)
  })

  newTbody.id = "popTbody"
  tbody.parentNode.replaceChild(newTbody, tbody)
  return tbody;

}

function printColony(){
  let popStatus = document.getElementById("popStatus")

  popStatus.innerHTML = "Population: " + population.length
}

function printGender(gender){
  if (gender === 1){
    return "male"
  } else {
    return "female"
  }
}
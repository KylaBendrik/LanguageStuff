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
    let CellHunger = document.createElement("td")
    let CellHouse = document.createElement("td")
    let CellAcres = document.createElement("td")
    let CellBarley = document.createElement("td")

    CellId.appendChild(document.createTextNode(person.id));
    CellGender.appendChild(document.createTextNode(printGender(person.gender)));
    CellBirthDay.appendChild(document.createTextNode(person.birth.month + "/" + person.birth.day + "/" + person.birth.year));
    CellJob.appendChild(document.createTextNode(jobs[person.job]));
    CellHunger.appendChild(document.createTextNode(person.needs.hunger.toFixed(0)));
    CellHouse.appendChild(document.createTextNode(printHouse(person.house)));
    CellAcres.appendChild(document.createTextNode(printAcres(person.house)));
    CellBarley.appendChild(document.createTextNode(houses[person.house].resources.food.barley.toFixed(2) + " bushels Barley"));


    row.appendChild(CellId)
    row.appendChild(CellGender)
    row.appendChild(CellBirthDay)
    row.appendChild(CellJob)
    row.appendChild(CellHunger)
    row.appendChild(CellHouse)
    row.appendChild(CellAcres)
    row.appendChild(CellBarley)

    if (person.alive === false){
      row.style.backgroundColor = "red"
    }


    newTbody.appendChild(row)
  })

  newTbody.id = "popTbody"
  tbody.parentNode.replaceChild(newTbody, tbody)
  return tbody;

}

function printColony(){
  let popStatus = document.getElementById("popStatus")

  popStatus.innerHTML = "Population: " + population.length

  printAcresTable();
}

function printGender(gender){
  if (gender === 1){
    return "male"
  } else {
    return "female"
  }
}

function printCrop(acre){
  return crops[acre.crop.type].name
}

function printAcresTable(){
  let Acrestbody = document.getElementById("acresTbody");
  let newAcresTbody = document.createElement("tbody")

  acres.forEach(function(acre){
    let row = document.createElement("tr")

    let cellAcreHouse = document.createElement("td")
    let cellAcreID = document.createElement("td")
    let cellAcreQuality = document.createElement("td")
    let cellAcreCrop = document.createElement("td")
    let cellAcreAge = document.createElement("td")

    cellAcreHouse.appendChild(document.createTextNode(acre.house));
    cellAcreID.appendChild(document.createTextNode(acre.id));
    cellAcreQuality.appendChild(document.createTextNode(acre.soilQuality));
    cellAcreCrop.appendChild(document.createTextNode(printCrop(acre)));
    cellAcreAge.appendChild(document.createTextNode(acre.crop.age));

    row.appendChild(cellAcreHouse)
    row.appendChild(cellAcreID)
    row.appendChild(cellAcreQuality)
    row.appendChild(cellAcreCrop)
    row.appendChild(cellAcreAge)

    newAcresTbody.appendChild(row)
  })

  newAcresTbody.id = "acresTbody"
  Acrestbody.parentNode.replaceChild(newAcresTbody, Acrestbody)
  return Acrestbody;
}
function initHouses(){
  let i = 0
  while (i < startingNum){
    let headOfHouse = newPerson(-1, -1, houses.length, 1)
    population.push(headOfHouse);

    let spouse = newPerson(-1, -1, houses.length, 0)
    population.push(spouse);

    houses.push(newHouse(headOfHouse, 2));

    i++
  }
}

function newHouse(headOfHouse, acresNum){
  let house = {
    id: houses.length,
    name: "House " + houses.length,
    headOfHouse: headOfHouse,
    acres: [],
    resources: {
      food: {barley: 10}
    }
  }

  let i = 0

  while (i<acresNum){
    let acre = newAcre()
    house.acres.push(acre)
    acres.push(acre)

    i++
  }

  
  return house 
}

function newAcre(){
  return {
    id: acres.length,
    soilQuality: 50,
    crop: {type: -1, age: 0}
  }
}

function printHouse(houseNum){
  return houses[houseNum].name
}

function printAcres(houseNum){
  let acres = houses[houseNum].acres

  return acres.length
}
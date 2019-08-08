function initHouses(){
  let i = 0
  while (i < startingNum){
    let headOfHouse = newPerson(-1, -1, houses.length, 1)
    population.push(headOfHouse);

    let spouse = newPerson(-1, -1, houses.length, 0)
    population.push(spouse);

    houses.push(newHouse(headOfHouse));

    i++
  }
}

function newHouse(headOfHouse){
  let house = {
    id: houses.length,
    name: "House " + houses.length,
    headOfHouse: headOfHouse,
    acres: 2
  }
  return house 
}
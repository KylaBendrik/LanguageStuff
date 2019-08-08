let personId = 0;

//define LifeEvent
function newLifeEvent(place){
  return {
    day: day,
    month: month,
    year: year,
    place: place
  }
}

//define person
function newPerson(father, mother, house, genOverwrite){
  let gender = 0

  //gender - Male 1, female 0
  if (genOverwrite != undefined){
    gender = genOverwrite
  } else{
    gender = rand(1,0)
  }

  let birth = newLifeEvent("Home")

  if (father === -1){
    birth.day = rand(30, 1)
    birth.month = rand(12, 1)
    birth.year = rand(3, 1)
  }

  let person = {
    id: personId,
    gender: gender,
    birth: birth,
    house: house
  }

  personId ++;

  return person;

}
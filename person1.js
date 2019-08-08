let personId = 0;

//define LifeEvent
function newLifeEvent(year, place){
  let day = rand(30, 1);
  let month = rand(12, 1);

  return {
    day: day,
    month: month,
    year: year,
    place: place
  }
}

//define person
function newPerson(father, mother, genOverwrite){
  let gender = 0

  //gender - Male 1, female 0
  if (genOverwrite != undefined){
    gender = genOverwrite
  } else{
    gender = rand(1,0)
  }

  if (father === undefined){
    
  }

  return {
    id: personId,
    gender: gender
  }

personId++;
}
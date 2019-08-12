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
    alive: true,
    gender: gender,
    birth: birth,
    house: house,
    job: 1
  }

  personId ++;

  return person;

};

function eatFood(house){
  let food = house.resources.food
  let family = []

  population.forEach(function(person){
    if (person.house === house.id && person.alive){
      family.push(person)
    }
  })

  //Barley = 96289 calories per bushel

  let caloriesAvailable = food.barley * 96289

  //for now, each person needs 1800 calories every day

  let demand = 1800

  let caloriesNeeded = demand * family.length

  if (caloriesNeeded < caloriesAvailable){
    family.forEach(function(person){
      food.barley -= 0.019;
    })
  }



}
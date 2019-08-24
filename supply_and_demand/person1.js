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
    job: 1,
    needs: {
      hunger: 2000
    },
    skills: {
      farming: 1,
      teaching: 1
    }
  }

  personId ++;

  return person;

};

function family(house){
  let family = []

  population.forEach(function(person){
    if (person.house === house.id && person.alive){
      family.push(person);
    }
  })

  return family
}

function eatFood(house){
  let food = house.resources.food
  let family = []
  let houseHunger = 0
  let caloriesAvailable = bushToCal(food.barley, 96289)

  population.forEach(function(person){
    if (person.house === house.id && person.alive){
      family.push(person);
      houseHunger += person.needs.hunger;
    }
  })

  //Barley = 96289 calories per bushel


  //if there's enough calories for everyone, then everyone gets full
  if (houseHunger <= caloriesAvailable){
    //everyone gets full
    family.forEach(function(person){
      food.barley -= calToBush(person.needs.hunger, 96289)

      person.needs.hunger = 0
    })
  }
  //otherwise, every gets an equal share of what's left in the house, and trigger a console.log for "buy food now"
  else {
    let portion = caloriesAvailable/family.length

    family.forEach(function(person){
      person.needs.hunger -= portion
    })

    food.barley = 0;

    console.log("buy food now!")
  }
}

function getHungry(){
  population.forEach(function(person){
    if (person.alive){
      //gets hungry based on actions that day
      person.needs.hunger += 2000;
    }
    if (person.needs.hunger >= 25200){
      person.alive = false;
    }
  })
}

function bushToCal(bushels, calBush){
  return bushels * calBush
}

function calToBush(calories, calBush){
  return calories / calBush
}
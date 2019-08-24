const jobs = ["None", "Farmer"];


//1) FARMER

//Barley = 96289 calories per bushel, 4.01 seeds per seed planted, 4-15 bushels harvested. Let's say 8
//4:1 harvest to plant. 8 bushels harvested = 2 bushels planted per acre.
//plant late April
//spring-planted barley ripens in 60-70 days?

let barley = {
  id: 1,
  name: "barley",
  yield: 4,
  calBushel: [96000, 96300],
  ripenTime: 65,
  plantTime: {month: 4, day: 20},
  maxTemp: 85,
}

let crops = [{id: 0, name: "fallow"}, barley]
//yield
//ripen time

//check for tasks

//Is there an empty acre?
function findAcresByType(house, type){
  let TypeAcres = []

  house.acres.forEach(function(acre){
    if (acre.crop.type === type){
      TypeAcres.push(acre)
    }
  })

  console.log(TypeAcres)

  return TypeAcres
}

//pick a crop
function pickCrop(farmer, acre){
  return 1;
}

function harvestAmount(farmer, acre){
  let quality = acre.soilQuality //0-100
  let aveYield = crops[acre.crop.type].yield //seeds harvested per seed planted

  //yield applies for average quality: 50, quality of 0 should have yield of 0, quality of 100 should have yield of 8

  let multiplier = quality / 50

  let result = multiplier * aveYield

  console.log(result)
  return result
}

function farming(house){
  if (month === 1 && day === 15){
    //on January 15, the head of house decides what will be planted in each acre
    let emptyAcres = findAcresByType(house, 0);

    emptyAcres.forEach(function(acre){
      acre.crop.type = pickCrop(house.headOfHouse, acre)
    })
  }
  if (month === 4 && day === 20){
    //on April 20, begin growing barley
    let barleyAcres = findAcresByType(house, 1)

    barleyAcres.forEach(function(acre){
      house.resources.food.barley -= 2;
      acre.crop.age ++;
    })
  }

  house.acres.forEach(function(acre){
    if (acre.crop.age > crops[acre.crop.type].ripenTime){
      house.resources.food.barley += harvestAmount(house.headOfHouse, acre)
      acre.crop.type = 0;
      acre.crop.age = 0;
    }
  })

}

function growing(){
  acres.forEach(function(acre){
    if (acre.crop.age > 0){
      acre.crop.age++;
    }
  })
}

function daysUntil(endDay, endMonth){

  monthResult = endMonth - month

  let newResult = 0

  if (monthResult < 0){
    newResult = 12 + monthResult
  } else {
    newResult = monthResult
  }

  return (newResult * 30) - day
}

//DEMAND

function desireToPurchase(house, resource){
  //right now, we're going to assume all resources are food. How much food does this family need to get through the winter?
  //# of people in house * 2000 * days until July

  let days = daysUntil(1, 7)

  let need = family(house).length * 2000 * days;

  let supply = bushToCal(house.resources.food.barley, 96289)

  let DTP = 0

  if (supply < need){
    DTP = need
  }

  return DTP
}

function desireToSell(house, resource){
  //right now, we're going to assume all resources are food. How much food does this family need to get through the winter?
  //# of people in house * 2000 * days until July

  let days = daysUntil(1, 7)

  let need = family(house).length * 2000 * days;

  let supply = bushToCal(house.resources.food.barley, 96289)

  let DTS = 0

  if (supply > need){
    DTS = supply.toFixed(0)
  }

  return DTS
}
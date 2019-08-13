const jobs = ["None", "Farmer"];


//1) FARMER

//Barley = 96289 calories per bushel, 4.01 seeds per seed planted, 4-15 bushels harvested. Let's say 8
//4:1 harvest to plant. 8 bushels harvested = 2 bushels planted per acre.
//plant late April
//spring-planted barley ripens in 60-70 days?

let barley = {
  id: 1,
  name: "barley",
  yield: [4, 4.01],
  calBushel: [96000, 96300],
  ripenTime: [60, 70],
  plantTime: {month: 4, day: 20},
  maxTemp: 85,
}

let crops = [{id: 0, name: "fallow"}, barley]
//yield
//ripen time

//check for tasks

//Is there an empty acre?
function findEmptyAcres(house){
  let emptyAcres = []

  house.acres.forEach(function(acre){
    if (acre.crop.type === 0){
      emptyAcres.push(acre)
    }
  })

  console.log("empty acres: ")
  console.log(emptyAcres)

  return emptyAcres
}

//pick a crop
function pickCrop(farmer, acre){
  return 1;
}

function farming(house){
  if (month === 1 && day === 15){
    //on January 15, the head of house decides what will be planted in each acre
    let emptyAcres = findEmptyAcres(house);

    emptyAcres.forEach(function(acre){
      acre.crop.type = pickCrop(house.headOfHouse, acre)
    })
  }


}

const jobs = ["None", "Farmer"];

function checkTasks(person){
  if (person.job === 1){
    farmerTask(houses[person.house])
  }
}

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
  plantTime: {month: 4, day: 20}
}

let crops = [{id: 0, name: "fallow"}, barley]
//yield
//ripen time

//check for tasks

//Is there an empty acre?
function farmerTask(house){
  let emptyAcres = []

  house.acres.forEach(function(acre){
    if (acre.crop.type === 0){
      emptyAcres.push(acre)
    }
  })

  console.log("empty acres: ")
  console.log(emptyAcres)
}


function plantCrop(crop, acre){

}

function printCrop(crop){

}

//So, mutation by pound. 48 pounds per bushel, 48 chances for a slightly different plant for each bushel harvested
//calculate mutation when harvesting
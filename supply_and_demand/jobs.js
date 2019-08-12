const jobs = ["None", "Farmer"];


//1) FARMER

//Barley = 96289 calories per bushel, 4.01 seeds per seed planted, 4-15 bushels harvested. Let's say 8
//4:1 harvest to plant. 8 bushels harvested = 2 bushels planted per acre.
//plant late April
//spring-planted barley ripens in 60-70 days?

let baseBarley = {
  id: 0,
  yield: [4, 4.01],
  calBushel: [96000, 96300],
  ripenTime: [60, 70],
  plantTime: 4
}

let barley = [baseBarley]

let crops = [barleys]
//yield
//ripen time

function plantCrop(crop, acre){
  newCr

  acre.crop.type = crop
}

function printCrop(crop){

}

//So, mutation by pound. 48 pounds per bushel, 48 chances for a slightly different plant for each bushel harvested
//calculate mutation when harvesting
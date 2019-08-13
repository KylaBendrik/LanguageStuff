//we need to know temperature (F) and rainfall per month. Rain in mm
const monthWeather = [
  {},
  {month: 1, temperature: [25, 55], rain: [50,70], rainDays: 15.25}, 
  {month: 2, temperature: [25, 55], rain: [25,45], rainDays: 15.25}, 
  {month: 3, temperature: [27, 61], rain: [40,60], rainDays: 15.25}, 
  {month: 4, temperature: [31, 65], rain: [32,52], rainDays: 15.25}, 
  {month: 5, temperature: [36, 72], rain: [35,55], rainDays: 15.25}, 
  {month: 6, temperature: [38, 78], rain: [35,55], rainDays: 15.25}, 
  {month: 7, temperature: [46, 82], rain: [35,55], rainDays: 15.25}, 
  {month: 8, temperature: [46, 82], rain: [32,52], rainDays: 15.25}, 
  {month: 9, temperature: [42, 76], rain: [32,52], rainDays: 15.25}, 
  {month: 10, temperature: [35, 68], rain: [62,72], rainDays: 15.25}, 
  {month: 11, temperature: [30, 61], rain: [35,45], rainDays: 15.25}, 
  {month: 12, temperature: [27, 57], rain: [49,69], rainDays: 15.25}, 

]



let weather = {
  temperature: 35,
  rain: 0,
  status: "sunny"
}

function newWeather(){
  //calculates today's weather

  let rainRand = rand(30, 0)

  
  weather.temperature = rand(monthWeather[month].temperature[1], monthWeather[month].temperature[0])

  if (rainRand < monthWeather[month].rainDays){
    let rainAmount = rand(monthWeather[month].rain[1], (monthWeather[month].rain[0]))

    weather.rain = rainAmount / 30;

    if (weather.temperature > 32){
      weather.status = "rainy"
    } else {
      weather.status = "snowy"
    }


    
  } else {
    weather.rain = 0
    weather.status = "sunny"
  }

  monthsRain += weather.rain;

}
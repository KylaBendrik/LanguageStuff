function newMap(width, height){
  let w = 0
  let map = []

  for (h = 0; h < height; h ++){
    
    let newRow = [];
    for (w=0; w < width; w++){
      let newCell = [0]
      newRow.push(newCell)
    }
    map.push(newRow)
  }

  return map
}

function rand(upperLimit, x){
  let lowerLimit = x

  if (x === undefined){
    lowerLimit = 0;
  } else {
    upperLimit -= lowerLimit;
  }
  return (Math.floor(Math.random() * upperLimit) + lowerLimit)
}

function genPangea(width, height){
  let map = newMap(width, height)

  map[90][180][0] = 1
  console.log(map[90][180][0])

  

  return map
}
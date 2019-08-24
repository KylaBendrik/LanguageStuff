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

function ifBlack(map, r, c){
  //look at 4 directions

  let sides = []

  if (map[r - 1][c][0] != undefined){
    sides.push(map[r - 1][c][0])
  }
  if (map[r][c -1][0] != undefined){
    sides.push(map[r][c -1][0])
  }
  if (map[r][c + 1][0] != undefined){
    sides.push(map[r][c + 1][0])
  }
  if (map[r + 1][c][0] != undefined){
    sides.push(map[r + 1][c][0])
  }

  let newSides = []

  sides.forEach(function(side){
    newSides.push(side)
    if (side === 1){
      //if it's black, it's added twice
      newSides.push(side);
      newSides.push(side);
      newSides.push(side);
      newSides.push(side);
      newSides.push(side);
    }
  })
  console.log("sides")
  console.log(newSides)

  let select = rand(newSides.length)
  console.log(newSides[select])

  return newSides[select]
}

function genPangea(width, height){
  let map = newMap(width, height)

  let startRow = 90
  let startCol = 180

  map[startRow][startCol][0] = 1
  console.log(map[startRow][startCol][0])

  //let's go in triangle down from pixel
  let nD = 1
  for(rD = startRow + nD; rD < height - 2; rD++){
    map[rD][startCol][0] = ifBlack(map, rD, startCol);
    console.log(map[rD][startCol][0])

    for(i = 0; i < nD; i++){
      //color in on each side
      map[rD][startCol + i][0] = ifBlack(map, rD, startCol + i)
      map[rD][startCol - i][0] = ifBlack(map, rD, startCol - i)
    }

    nD += 1;
  }

  return map
}


function printMap(map){
  var canvas = document.getElementById("pangea");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000000";

  let r = 0

  map.forEach(function(row){
    
    let c = 0
    row.forEach(function(cell){
      if (cell[0] === 1){
        ctx.fillRect(c, r, 1, 1);
      }
      
      c++
    })
    r++
  })

}

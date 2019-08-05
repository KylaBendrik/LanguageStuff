//rules for pronounciation

//categories
let consonants = [
  {letter: "b", rules: {
    C264: "p",
    C264: "p"}, type: "C"}]

let vowels = [
  {letter: "a", phoneme: "a", rules: {V4: "ə", R5: "a"}, type: "V"},
  {letter: "e", phoneme: "e", rules: {V4: "ə", R5: "e"}, type: "V"},
];

function calcIPA(letter, word, sylNum, letNum, print){
  let previous = print[letNum - 1];
  let next = print[letNum + 1];
  let score = 0;

  if (letter.type === "C"){
    //broad: 264, slender: 128 100000000 or 010000000
    score += BroadSlender(next) + placement(letNum, print);


    console.log(score)
    return letter.rules["C" + score];
  } else {
    return letter.phoneme;
  }
}

function BroadSlender(next){
  console.log("next")
  console.log(next)
  if (next === "a" || next === "o" || next === "u"){
    console.log("broad")
    return 264
  }
  if (next === "e" || next === "i"){
    console.log("slender")
    return 128
  } else {
    return 0
  }
  
}

function placement(letNum, print){
  if (letNum === 0){
    //initial
    return 64
  }
  if (letNum === print.length){
    return 32
  }
  return 96;
}
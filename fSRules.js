//rules for pronounciation

//categories
let consonants = [
  {letter: "b", rules: {
    C0: "p",
    C66: "pj"}, type: "C"}]

let vowels = [
  {letter: "a", rules: {
    V0: "ə", 
    R5: "a"}, type: "V"}
];

function calcIPA(letter, word, sylNum, letNum, print,ipa){
  let previous = print[letNum - 1];
  let next = print[letNum + 1];
  let score = 0;

  console.log("ipa")
  console.log(ipa)

  if (letter.type === "C"){
    //broad: 264, slender: 128 (11)0000000 mask 392
    //initial: 64, final: 32, other: 96 00(11)00000 mask 96

    //as an example: "b"
    //always /p/, unless before a slender back vowel. 
    score += BroadSlender(next) + initial(letNum) + final(letNum, print) + adjecent();


    console.log(score)
    return letter.rules["C" + score];
  } else {
    return letter.rules["V" + score];
  }
}

function BroadSlender(next){
  console.log("next")
  console.log(next)
  if (next === "a" || next === "o" || next === "u"){
    console.log("broad")
    return 128
  }
  if (next === "e" || next === "i"){
    console.log("slender")
    return 64
  } else {
    return 0
  }
  
}

function initial(letNum){
  if (letNum === 0){
    //initial
    return 32
  } else {
    //non-initial
    return 0
  }
}

function final(letNum, print){
  if (letNum === print.length){
    //final
    return 16
  } else {
    //non-final
    return 0
  }
}

function adjecent(ipa){
  let adjecentScore = 0;

}
//consonant = 0, vowel = 1;
let syllTypes = [[0, 1], [1, 0], [0, 1, 0]];

let word = {syllables: [], ipa: [], print: []}

function rand(upperLimit, x){
  let lowerLimit = x

  if (x === undefined){
    lowerLimit = 0;
  } else {
    upperLimit -= lowerLimit;
  }
  return (Math.floor(Math.random() * upperLimit) + lowerLimit)
}

function printAll(wordDiv, ipaDiv, word){
  wordDiv.append(document.createTextNode(printWord(word)))
  ipaDiv.append(document.createTextNode("/" + printIPA(word) + "/"))
}

function initWord(){
  let sylls = rand(3, 1);
  let i = 0;

  while(i < sylls){
    syllType = syllTypes[rand(syllTypes.length)]
    let newSyllable = []

    syllType.forEach(function(type){
      let newLetter = {}
      if (type === 0){
        newLetter = consonants[rand(consonants.length)]
      } else{
        newLetter = vowels[rand(vowels.length)]
      }
      
      newSyllable.push(newLetter)
            word.print.push(newLetter.letter)
    })

    word.syllables.push(newSyllable)
    
    i++;
  }
}

function printWord(word){
  return word.print.join("")
}

function printIPA(word){
  return word.ipa
}

initWord();

let wordDiv = document.getElementById("word")
let ipaDiv = document.getElementById("ipa")
printAll(wordDiv, ipaDiv, word)

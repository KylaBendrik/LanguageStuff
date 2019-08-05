//consonant = 0, vowel = 1;
let syllTypes = [[0, 1], [1, 0], [0, 1, 0]];

function rand(upperLimit, x){
  let lowerLimit = x

  if (x === undefined){
    lowerLimit = 0;
  }
  return (Math.floor(Math.random() * upperLimit) + lowerLimit)
}

function newSyllable(){
  let type = syllTypes[rand(syllTypes.length)]
  let syllable = []

  type.forEach(function(letter){
    if (letter === 0){
      syllable.push(consonants[rand(consonants.length)])
    }
    if (letter === 1){
      syllable.push(vowels[rand(vowels.length)])
    }
  })

  return printSyllable(syllable);
}

function printSyllable(syllable){
  let array = []

  syllable.forEach(function(letter){
    array.push(letter.letter)
  })

  return array.join('')
}

function printWord(wordDiv, ipaDiv){
  wordDiv.append(document.createTextNode(newSyllable()))
  ipaDiv.append(document.createTextNode("ipa"))
}

let wordDiv = document.getElementById("word")
let ipaDiv = document.getElementById("ipa")
printWord(wordDiv, ipa)

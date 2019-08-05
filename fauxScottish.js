//consonant = 0, vowel = 1;
let syllTypes = [[0, 1], [1, 0], [0, 1, 0]];

let print = []
let ipa = []

function rand(upperLimit, x){
  let lowerLimit = x

  if (x === undefined){
    lowerLimit = 0;
  } else {
    upperLimit -= lowerLimit;
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

  return syllable;
}

function newWord(){
  let sylls = rand(4, 1);
  console.log(sylls)
  let i = 0;
  let word = []
  while (i<sylls){
    word.push(newSyllable())

    i++;
  }

  return word;
}

function printWord(word){
  console.log(word)

  word.forEach(function(syllable){
    syllable.forEach(function(letter){
      print.push(letter.letter);
    })
  })


  return print.join("");
}

function printIPA(word, print){
  console.log(print)

  let letNum = 0;
  let sylNum = 0;

  word.forEach(function(syllable){
    syllable.forEach(function(letter){
      ipa.push(calcIPA(letter, word, sylNum, letNum, print));
      letNum++;
    })
    
    sylNum++;

    if (sylNum < word.length){
      ipa.push(".")
    }
  })

  return ipa.join('');
}

function printAll(wordDiv, ipaDiv, word){
  wordDiv.append(document.createTextNode(printWord(word)))
  ipaDiv.append(document.createTextNode("/" + printIPA(word, print) + "/"))
}

let word = newWord();

let wordDiv = document.getElementById("word")
let ipaDiv = document.getElementById("ipa")
printAll(wordDiv, ipaDiv, word)

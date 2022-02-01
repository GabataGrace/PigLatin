let paragraph = "I am Grace the Amazing";

function transLateParagraph(paragraph) {
  let words = paragraph.split(" ");
  //console.log(words);
  let tWords = [];

  words.forEach((w) => {
    tWords.push(translateWord(w));
  });

  console.log("translated", words, tWords);
  let PLsentence = tWords.join(" ");
  //console.log(PLsentence);
  return PLsentence;
}

function translateToPigLatin() {
  const englishMessageHolder = document.getElementById("englishMessageHolder");
  console.log("englishMessageHolder", englishMessageHolder);
  let englishMessage = englishMessageHolder.value;
  console.log("translating :");
  console.log(englishMessage);
  console.log(" to Pig Latin, giving us -");
  let pigLatinTranslation = transLateParagraph(englishMessage);
  console.log(pigLatinTranslation);
  const pigLatinMessageHolder = document.getElementById(
    "pigLatinMessageHolder"
  );
  pigLatinMessageHolder.value = pigLatinTranslation;
}
function translateToEnglish() {
  const pigLatinMessageHolder = document.getElementById(
    "pigLatinMessageHolder"
  );

  let pigLatinMessage = pigLatinMessageHolder.value;
  console.log("translating :");
  console.log(pigLatinMessage);
  console.log(" to English as: ");
  let translatedPigLatin = transLateParagraph(pigLatinMessage);
  console.log("translatedPigLatin = ", translatedPigLatin);
  let retranslationArea = document.getElementById("finalTranslationArea");
  retranslationArea.value = translatedPigLatin;
}

function translateWord(inWord) {
  let vowels = ["a", "e", "i", "o", "u"];
  let transword = "";
  if (inWord.includes("-")) {
    word = inWord;
    //word is piglatin

    if (word.slice(word.length - 4) === "-ay") {
      //word is vowel pig latin word
      transword = word.slice(0, length - 4);
      return transword;
    } else {
      // word is a consanant word.
      tempWord = word.slice(0, word.length - 2);
      //console.log("tempword->", tempWord);
      let transPart = tempWord.split("-");
      //console.log(transPart);
      transword =
        transPart[1].slice(0).toLowerCase() + transPart[0].toLowerCase();

      return transword;
    }
  } else {
    // word is normal english
    word = inWord.toLowerCase();
    if (vowels.includes(word[0])) {
      transword = word + "-ay";
      return transword;
    } else {
      //word is a consanant word
      let tempW = "";
      for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i])) {
          // you found a consenant save it with the others and continue
          tempW = tempW + word[i].toUpperCase();
          //console.log("tempW", tempW);
          if (i === word.length) {
            console.log("AAAAAAAAAAAAAAAAAAAA", word, "-", tempW);
          }
        } else {
          // once a vowel is
          //found we are done, all left over parts of word,
          //word[i] - through - word.length - 1
          //so assemble the word  and you are done.

          transword = word.slice(i) + "-" + tempW.toUpperCase() + "ay";
          //console.log("returning transword 1", transword);
          return transword;
        }
      }
      // if at this point you have inspected the entire word, consenents are in tempw. Uppercased.  left over vowels are
      //console.log("returning transword 2", transword);

      return transword;
    }
    //console.log("returning transword 3", transword);

    return transword;
  }
}
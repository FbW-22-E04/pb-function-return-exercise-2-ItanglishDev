// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowel_count(str1) {
  let vowelCounter = 0;

  //write your code here
  for (let i = 0; i < str1.length; i++) {
    // console.log("here", str1.length);
    if (str1[i].includes("a")) {
      vowelCounter++;
    } else if (str1[i].includes("e")) {
      vowelCounter++;
    } else if (str1[i].includes("i")) {
      vowelCounter++;
    } else if (str1[i].includes("o")) {
      vowelCounter++;
    } else if (str1[i].includes("u")) {
      vowelCounter++;
    } else {
    }
  }
  return vowelCounter;
}
console.log(vowel_count("The quick brown fox"));

//2
// Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l) {
  const characterList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let stringId = "";
  for (let i = 0; i < l; i++) {
    stringId += characterList.charAt(
      Math.floor(Math.random() * characterList.length)
    );
  }
  return stringId;
  //write your code here
}
console.log(makeid(8));

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function abc() {
  //write your code here
}

abc();

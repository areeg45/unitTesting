function max(...args) {
  let result = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] > result) {
      result = args[i];
    }
  }
  return result;
}
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
function isEven(num) {
  return num % 2 === 0;
}

function capitalizeWords(sentence) {
  const words = sentence.split(' ');
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(' ');
}
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function isPerfectSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

function isInRange(number, min, max) {
  return number >= min && number <= max;
}

function areAnagrams(str1, str2) {
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  return sortedStr1 === sortedStr2;
}


module.exports = {
  isPrime,
  isPalindrome,
  max,
  isEven,
  capitalizeWords,
  factorial,
  isPerfectSquare,
  isInRange,
  areAnagrams,
};

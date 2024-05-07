const { isPrime, isPalindrome, max, isEven,capitalizeWords,factorial,isInRange,areAnagrams} = require("./functions");

test("max number", () => {
  const result = max(2, 3);
  const expected = 3;
  expect(result).toBe(expected);
});

test("isPrime", () => {
  const result = isPrime(7);
  const expected = true;
  expect(result).toBe(expected);
});

test("if number is even", () => {
  const result = isEven(4);
  const expected = true;
  expect(result).toBe(expected);
});
test("check if a string is a palindrome", () => {

  const result = isPalindrome("hello");
  const expected = false;
  expect(result).toBe(expected);
});



test('capitalizeWords function to capitalizes word', () => {
  const result= capitalizeWords('areeg mahmoud');
  const expected = 'Areeg Mahmoud';
  expect(capitalizeWords(result)).toBe(expected);
});

test('factorial of 5 is 120', () => {
  expect(factorial(5)).toBe(120);
});

test('5 is within the range 1 to 10', () => {
  expect(isInRange(5, 1, 10)).toBe(true);
});

test('"listen" and "silent" are anagrams', () => {
  expect(areAnagrams('listen', 'silent')).toBe(true);
});


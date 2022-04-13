const myFunctions = require('./sample-functions.js');

test('Testing sum -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Testing div -- success', () => {
  const target = 20;
  const result = myFunctions.div(200, 10);
  expect(target).toBe(result);
});

test('Testing div, decimals -- success', () => {
  const target = 1.5;
  const result = myFunctions.div(3, 2);
  expect(target).toBe(result);
});

test('Testing div -- success', () => {
  const target = 1.5;
  const result = myFunctions.div(3, 2);
  expect(target).toBe(result);
});

test('Testing contains numbers -- success', () => {
  const data = "hel1lo worl2d !3"
  expect(myFunctions.containsNumbers(data)).toBeTruthy();
});

test('Testing contains numbers -- success', () => {
  const data = "hello world"
  expect(myFunctions.containsNumbers(data)).toBeFalsey();
});

test('Testing contains numbers -- success', () => {
  const data = "hello 1world"
  expect(myFunctions.containsNumbers(data)).toBeTruthy();
});

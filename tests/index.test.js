const cimexDev = require('../lib/dev');
const cimexProd = require('../lib/prod');

test('Dev mode', () => {
  console.log = jest.fn();
  cimexDev('Hello World');
  expect(console.log).toHaveBeenCalledTimes(6);
});

test('Prod mode', () => {
  console.log = jest.fn();
  cimexProd('Hello World');
  expect(console.log).toHaveBeenCalledTimes(0);
});
const { itemCounts, convertStringToArray, sanatizeString } = require('../textalyze');

describe('itemCount', () => {
  test('returns a count of the strings in the array', () => {
    const input = ['one', 'two', 'three', 'one', 'two', 'ZZZZ'];
    const expectedOutput = new Map([['one', 2], ['two', 2], ['three', 1], ['ZZZZ', 1]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('returns an empty hash when array is empty', () => {
    const input = [];
    const expectedOutput = new Map();

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('counts multiple words', () => {
    const input = ['hi', 'hi', 'hi'];
    const expectedOutput = new Map([['hi', 3]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('handles non-string inputs', () => {
    const input = ['null', null, '10', 10];
    const expectedOutput = new Map([['null', 1], [null, 1], ['10', 1], [10, 1]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('is case-sensitive', () => {
    const input = ['a', 'A', 'a', 'A'];
    const expectedOutput = new Map([['a', 2], ['A', 2]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });
});

describe('convertStringToArray', () => {
  test('converting string to array', () => {
    const input = 'some string';
    const expectedOutput = ['s', 'o', 'm', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g'];

    expect(convertStringToArray(input)).toEqual(expectedOutput);
  });

  test('input is a integer', () => {
    const input = 1234;
    const expectedOutput = [];

    expect(convertStringToArray(input)).toEqual(expectedOutput);
  });
});

describe('sanatizeString', () => {
  test('sanatizing the string', () => {
    const input = 'soMe sTrIng';
    const expectedOutput = 'some string';

    expect(sanatizeString(input)).toEqual(expectedOutput);
  });

  test('input is not a string', () => {
    const input = 1234;
    const expectedOutput = '';

    expect(sanatizeString(input)).toEqual(expectedOutput);
  });
});

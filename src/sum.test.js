/* eslint-env jest */
const sum = require('./sum')

describe('sum()', () => {
  test('Given 5 and 2, should sum 7', () => {
    const given = {
      a: 5,
      b: 2
    }

    const expected = 7

    const actual = sum(given.a, given.b)

    expect(actual).toEqual(expected)
  })
})

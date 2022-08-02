/* eslint-env jest */
const sum = require('./sum')

describe('sum()', () => {
  test('Given 16 and 12, should sum 28', () => {
    const given = {
      a: 16,
      b: 12
    }

    const expected = 28

    const actual = sum(given.a, given.b)

    expect(actual).toEqual(expected)
  })
})

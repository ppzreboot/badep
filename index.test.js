import { test, expect } from 'vitest'
import { badep } from '.'

test('length', () => {
  expect(
    badep(100, 99).length
  ).toBe(99)
  expect(
    badep(100, 2).length
  ).toBe(2)
  expect(
    badep(101, 97).length
  ).toBe(97)
  expect(
    badep(100001, 303).length
  ).toBe(303)
  expect(
    badep(100001, 999).length
  ).toBe(999)
  expect(
    badep(100001, 10001).length
  ).toBe(10001)
  expect(
    badep(100001, 100000).length
  ).toBe(100000)
  expect(
    badep(100001, 1).length
  ).toBe(1)
})

test('duplicated element', () => {
  expect(
    badep(10001, 777).length
  ).toBe(
    Array.from(new Set(badep(10001, 777))).length
  )
  expect(
    badep(10001, 999).length
  ).toBe(
    Array.from(new Set(badep(10001, 999))).length
  )
  expect(
    badep(10001, 8000).length
  ).toBe(
    Array.from(new Set(badep(10001, 8000))).length
  )
  expect(
    badep(10001, 3).length
  ).toBe(
    Array.from(new Set(badep(10000, 3))).length
  )
  expect(
    badep(10001, 10000).length
  ).toBe(
    Array.from(new Set(badep(10001, 10000))).length
  )
})

function is_incr(arr) {
  for (let i=0; i<arr.length-1; i++)
    if (arr[i] >= arr[i+1])
      return false
  return true
}
test('is_incr', () => {
  expect(is_incr([1,2,3])).toBe(true)
  expect(is_incr([1,1.1,1.3])).toBe(true)
  expect(is_incr([1,1.9999999999999,2])).toBe(true)
  expect(is_incr([1,0.9,1.3])).toBe(false)
})
test('increment', () => {
  expect(
    is_incr(badep(10001, 10000))
  ).toBe(true)
  expect(
    is_incr(badep(10001, 101))
  ).toBe(true)
  expect(
    is_incr(badep(10001, 99))
  ).toBe(true)
  expect(
    is_incr(badep(10001, 5000))
  ).toBe(true)

  expect(
    is_incr(badep(800, 400))
  ).toBe(true)
  expect(
    is_incr(badep(800, 32))
  ).toBe(true)
  expect(
    is_incr(badep(800, 700))
  ).toBe(true)
  expect(
    is_incr(badep(800, 1))
  ).toBe(true)
})

test('in range', () => {
  let result = badep(10001, 100)
  expect(result.at(0)).gte(0)
  expect(result.at(-1)).lte(10000)

  result = badep(10001, 10000)
  expect(result.at(0)).gte(0)
  expect(result.at(-1)).lte(10000)

  result = badep(10001, 999)
  expect(result.at(0)).gte(0)
  expect(result.at(-1)).lte(10000)

  result = badep(10001, 1)
  expect(result.at(0)).gte(0)
  expect(result.at(-1)).lte(10000)

  result = badep(10001, 9999)
  expect(result.at(0)).gte(0)
  expect(result.at(-1)).lte(10000)

  result = badep(8, 7)
  expect(result.at(0)).gte(0)
  expect(result.at(-1)).lte(7)

  result = badep(4, 3)
  expect(result.at(0)).gte(0)
  expect(result.at(-1)).lte(3)

  result = badep(6, 2)
  expect(result.at(0)).gte(0)
  expect(result.at(-1)).lte(5)
})

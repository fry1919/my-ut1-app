import { describe, it, expect } from 'vitest'
import { fibonacci } from './fiboOsman.js'

describe('fibonacci', () => {
  var puesto1 = fibonacci(1)
  var puesto3 = fibonacci(3)
  var puesto10 = fibonacci(10)

  it(`posición 1 , da ${puesto1}`, () => {
    expect(puesto1).toBe(1)
  })
  it(`posición 3 , da ${puesto3}`, () => {
    expect(puesto3).toBe(2)
  })
  it(`posicion 10, da ${puesto10}`, () => {
    expect(puesto10).toBe(55)
  })
})



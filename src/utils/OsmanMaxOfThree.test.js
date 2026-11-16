import { describe, it, expect } from 'vitest'
import { MAX } from './OsmanMaxOfThree.js'

// V(G) = 4 -> hay 4 caminos, un it por cada camino de la tabla
describe('MAX', () => {
  var camino1 = MAX(5, 3, 7)  // a=5 b=3 c=7
  var camino2 = MAX(5, 3, 4)  // a=5 b=3 c=4
  var camino3 = MAX(5, 7, 6)  // a=5 b=7 c=6
  var camino4 = MAX(5, 7, 9)  // a=5 b=7 c=9

  it(`camino 1,2,3,5,6,F: sale c, da ${camino1}`, () => {
    expect(camino1).toBe(7)   // sale c
  })
  it(`camino 1,2,3,4,F: sale a, da ${camino2}`, () => {
    expect(camino2).toBe(5)   // sale a
  })
  it(`camino 1,2,5,7,F: asale b, da ${camino3}`, () => {
    expect(camino3).toBe(7)   // sale b
  })
  it(`camino 1,2,5,6,F: sale c, da ${camino4}`, () => {
    expect(camino4).toBe(9)   // sale c
  })
})

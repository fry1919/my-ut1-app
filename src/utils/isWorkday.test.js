import { describe, it, expect } from 'vitest'
import { isWorkday } from './isWorkday.js'

// 8 caminos
describe('isWorkday', () => {
  var camino1 = isWorkday("lunes")
  var camino2 = isWorkday("martes")
  var camino3 = isWorkday("miércoles")
  var camino4 = isWorkday("jueves")
  var camino5 = isWorkday("viernes")
  var camino6 = isWorkday("sábado")
  var camino7 = isWorkday("domingo")
  var camino8 = isWorkday("hola")   // cualquier otro valor -> default

  it(`camino 1,2,3,F: lunes, da ${camino1}`, () => { //Laboral da TRUR
    expect(camino1).toBe(true)
  })
  it(`camino 1,2,4,F: martes, da ${camino2}`, () => {
    expect(camino2).toBe(true)
  })
  it(`camino 1,2,5,F: miércoles, da ${camino3}`, () => {
    expect(camino3).toBe(true)
  })
  it(`camino 1,2,6,F: jueves, da ${camino4}`, () => {
    expect(camino4).toBe(true)
  })
  it(`camino 1,2,7,F: viernes, da ${camino5}`, () => {
    expect(camino5).toBe(true)
  })
  it(`camino 1,2,8,F: sábado, da ${camino6}`, () => {
    expect(camino6).toBe(false)
  })
  it(`camino 1,2,9,F: domingo, da ${camino7}`, () => { // No laboral da FALSE
    expect(camino7).toBe(false)
  })
  it(`camino 1,2,10,F: hola (default), da ${camino8}`, () => { // No es un dia pero da FALSE tamb
    expect(camino8).toBe(false)
  })
})

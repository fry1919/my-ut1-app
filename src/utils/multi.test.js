import { describe, it, expect } from 'vitest'
import { multi } from './multi'

describe('multi', () => {
  var positivo = multi(3,4)
  var medio = multi(-2, -45)
  var negativo = multi(-3,4)
  // it = cada test realizado
  // primero va el texto mostrado por consola y luego con => y expect
  // expect(funcion(a, b)).ToBe(lo que esperas obtener)
  it(`multiplica dos positivos , resultado ${positivo}`, () => {
    expect(multi(7, 4)).toBe(28) // positivo × positivo
  })
  // para poder usar ${x} esto para imprimiar algo por pantalla
  // tienes que usar la coma extraña `
  it(`multiplica dos negativos y da positivo, resultado ${medio}`, () => {
    expect(multi(-2, -45)).toBe(90)}) // negativo × negativo

  it(`multiplica un positivo y un negativo y da negativo  resultado ${negativo}`, () => {
  // Una prueba puede tener varios expect, tienen que cumplirse TODOS
    expect(multi(3, -4)).toBe(-12)   // positivo × negativo
    expect(multi(-3, 4)).toBe(-12)   // negativo × positivo (el orden no importa)
  })
  it(`Es una funcion`, () => {
    expect(multi).toBeTypeOf('function') // comprueba que sea una funcion
  })
})


import { describe, it, expect } from 'vitest'
import { compare } from './isAmountBounded.js'

describe('Es 1000?', () => {
  var Dentro = compare(70)  
  var Abajo  = compare(-80)
  var Arriba = compare("87238974082734097230947")
  
 
  // it = cada test realizado
  // primero va el texto mostrado por consola y luego con => y expect
  // expect(funcion(a, b)).ToBe(lo que esperas obtener)

  it(`Entra dentro por lo que da,  ${Dentro}`, () => {
    expect(Dentro).toBe(true)
  
  })
  it(`se sale por abajo, da  ${Abajo}`, () => {
    expect(Abajo).toBe(false)   
  })                               
  it(`se sale por arriba, da  ${Arriba}`, () => {
     
    expect(Arriba).toBe(false)   // es negativo da Null
  })  
})


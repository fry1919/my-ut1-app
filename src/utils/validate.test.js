import { describe, it, expect } from 'vitest'
import { validateText } from './validateText.js'

describe('multi', () => {
  var numeros = validateText("hola67")
  var dentro = validateText("holalala")
  var fuera = validateText("holalalalalalala")
  
 
  // it = cada test realizado
  // primero va el texto mostrado por consola y luego con => y expect
  // expect(funcion(a, b)).ToBe(lo que esperas obtener)

  it(`tiene letras, da  ${numeros}`, () => {
    expect(numeros).toBe(false) // tiene numeros da false
  
  })
  it(`dentro del rango, da  ${dentro}`, () => {
    expect(dentro).toBe(true)   // entra dentro del rango entre
  })                            // 6 y 10 por lo que da true
  it(`tiene solo letras pero fuera del rango, da  ${fuera}`, () => {
     
    expect(fuera).toBe(false)   // muchas letras por lo que deberia dar false
  })  
})


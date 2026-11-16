import { describe, it, expect } from 'vitest'
import { isApproved } from './isApproved.js'

describe('multi', () => {
  var Aprobado = isApproved(5)  
  var Suspenso  = isApproved(4)
  var Fuera_rango = isApproved(-3)
  var Fuera_arriba = isApproved(15)
  
 
  // it = cada test realizado
  // primero va el texto mostrado por consola y luego con => y expect
  // expect(funcion(a, b)).ToBe(lo que esperas obtener)

  it(`es mayor que o igual (>=) 5, da  ${Aprobado}`, () => {
    expect(Aprobado).toBe(true) 
  
  })
  it(`es menor que o igual (<=) 4, da  ${Suspenso}`, () => {
    expect(Suspenso).toBe(false)   
  })                               
  it(`no entra dentro del rango -3, da  ${Fuera_rango}`, () => {
     
    expect(Fuera_rango).toBe(null)   // es negativo da Null
  })  
  it(`no entra dentro del rango 11 NUEVO CAJA BLANCA, da  ${Fuera_rango}`, () => { //NUEVOOOOO CAJA BLANCA
     
    expect(Fuera_rango).toBe(null)   // es negativo da Null
  }) 
})


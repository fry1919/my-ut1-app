import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { compare } from './isAmountBounded.js'
 

function esNumerico(x) {
    // Si es número de verdad: vale si no es NaN ni Infinity
    if (typeof x === 'number') {
      return Number.isFinite(x);
    }
  
    // Si es texto: no puede estar vacío y tiene que convertirse bien
    if (typeof x === 'string' && x.trim() !== '') {
      return Number.isFinite(Number(x));
    }
  
    // Cualquier otra cosa (null, true, [], {}...) no es un número
    return false;
  }



//console.log(esNumerico(input()))

var gay = compare(78575875)

console.log(gay)


import { describe, expect, it } from "vitest" //importamos funciones de la librería vitest
import {paraprobar} from './paraprobar' //importamos el archivo con la función que vamos a probar


describe('Función paraprobar', () => {
//Creamos una función con it para probar nuestra función paraprobar
it('paraprobar debe devolver 2 si el valor de entrada es 3', () => {
const valorentrada = 3
const valoresperado = 2
const valorsalida = paraprobar(valorentrada)
//Comprueba que el resultado esperado es igual al obtenido
expect(valorsalida).toBe(valoresperado);
});
});
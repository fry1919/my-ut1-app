export function compare (a) {

    var a_chulo = parseInt(a) //Convierto el valor a un enetero antes de procesarlo

    if ( 0 <= a_chulo && a_chulo <= 1000) { // hago un if que compruebe si esta dentro del rango
        return true       
    }
    else {
        return false
    }

}


export function isApproved(vnota) {
 
  const nota = vnota;                    // 1
 
  if ((nota<0) || (nota > 10)) {         // 2 = (nota<0)   3 = (nota > 10)
    return null                          // 4
  } 
  else {
    if (nota <5) {                       // 5
      return false                       // 6
    } 
  else {
      return true                        // 7
    }
  }
}
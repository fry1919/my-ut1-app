export function isWorkday(day){
  const today = day;              // 1
  switch (today) {                // 2
    case "lunes":
      return true;                // 3
    case "martes":
      return true;                // 4
    case "miércoles":
      return true;                // 5
    case "jueves":
      return true;                // 6
    case "viernes":
      return true;                // 7
    case "sábado":
      return false;               // 8
    case "domingo":
      return false;               // 9
    default:
      return false;               // 10
  }
}

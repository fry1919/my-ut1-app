export function MAX (a, b, c) {
  if (a > b && a > c) {
    return a
  } else if (c > b) {
    return c
  } else {
    return b
  }
}



export function authorsNames(names) {
  if(names.length === 1) {
    return names[0]
  }
  else if(names.length === 2) {
    return `${names[0]} and ${names[1]}`
  }
  else {
    const last = names.pop()
    return names.join(', ') + ' and ' + last
  }
}
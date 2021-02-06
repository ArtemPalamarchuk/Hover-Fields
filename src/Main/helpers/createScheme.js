export const createScheme = (fieldsCount) => {
  const scheme = []

  for (let i = 0; i < fieldsCount; i++) {
    const row = []
    scheme.push(row)
    for (let j = 0; j < fieldsCount; j++) {
      scheme[i].push({x: j + 1, y: i + 1})
    }
  }

  return scheme
}
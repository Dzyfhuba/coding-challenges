function narcissistic(value) {
  const splitted = value.toString().split('')

  const powered = splitted.map(e => Math.pow(parseInt(e), splitted.length))

  return powered.reduce((a, b) => a + b) === value
}

module.exports = narcissistic
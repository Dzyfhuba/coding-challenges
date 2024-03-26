const isIsogram = (str: string) => {
  const splitted = str.toLowerCase().split('')

  const counter:{[x:string]:number} = {}

  splitted.forEach(e=>{
    counter[e] = (counter[e] || 0) + 1
  })

  return !!!Object.values(counter).filter(e => e > 1).length
}

export {isIsogram}
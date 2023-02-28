import { faker } from '@faker-js/faker'

export const generateWords = (count = 20) => {
  return new Array(count)
    .fill()
    .map(_ => faker.random.word())
    .join()
}

const syntaxList = [
  'const',
  'let',
  'var',
  'console.log()',
  'Object.keys()',
  '.map()',
  '.filter()',
  '.includes()',
  'Math.random()',
  'module.export',
  'export default',
  'require()',
  'Math.floor()',
  'Math.ceil()',
  'useState()',
  'useEffect()'
]

const randomSyntax = (arr) => {
  let output = []
  let amount = 10

  while (amount > -1) {
    let random = Math.floor(Math.random() * arr.length)
    output.push(arr[random])
    amount --
  }
  
  return output
}

export const generateSyntaxes = randomSyntax(syntaxList)
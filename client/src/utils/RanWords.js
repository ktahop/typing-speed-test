import { faker } from '@faker-js/faker'

export const generateWords = (count) => {
  let output = ""
  for (let word = 0; word < count; word++) {
    if (word === count - 1) {
      output += `${faker.random.word().toLowerCase()}`
    } else {
      output += `${faker.random.word().toLocaleLowerCase()} `
    }
  }
  return output
}

const syntaxes = [
  'const',
  'let',
  'var',
  'function()',
  'console.log()',
  '.map()',
  '.filter()',
  '.includes()',
  'Math.floor()',
  'Math.ceil()',
  'Math.random()',
  'module.export',
  'export default',
  'require()',
  'import from',
  'useState()',
  'useEffect()',
  'useNavigate()',
  '<App />',
  '<Routes>',
  '<Route />'
]

export const generateSyntaxes = (count, arr = syntaxes) => {
  let output = ""
  for (let syntax = 0; syntax < count; syntax++) {
    const random = Math.floor(Math.random() * arr.length)
    if (syntax === count - 1) {
      output += `${arr[random]}`
    } else {
      output += `${arr[random]} `
    }
  }
  return output
}
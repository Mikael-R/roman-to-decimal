const romanLetterToDecimal = (letter) => {
  letter = letter.toUpperCase().trim()

  switch(true) {
    case letter === 'I':
      return 1
    case letter === 'V':
      return 5
    case letter === 'X':
      return 10
    case letter === 'L':
      return 50
    case letter === 'C':
      return 100
    case letter === 'D':
      return 500
    case letter === 'M':
    return 1000
  }
}

const romanToDecimal = (romanNumber) => {
  let decimalNumber = 0

  for (let i = 0; i < romanNumber.length; i++) {
    const currentLetterValue = romanLetterToDecimal(romanNumber[i])
    const nextLetterValue = romanLetterToDecimal(romanNumber[i + 1] || '')

    if (nextLetterValue > currentLetterValue) decimalNumber -= currentLetterValue
    else decimalNumber += currentLetterValue

  }

  return decimalNumber
}

console.log(romanToDecimal('XXXVIV'))
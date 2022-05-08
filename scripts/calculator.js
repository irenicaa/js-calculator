window.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector(".input-field")
  let previousValue = inputField.value
  inputField.addEventListener("input", () => {
    if (!/^-?\d*(\.\d*)?$/.test(inputField.value)) {
      inputField.value = previousValue
      return
    }

    previousValue = inputField.value
  })

  let previousNumber
  let isNewNumber = true
  let isNewExpression = true
  for (let i = 0; i < 10; i++) {
    const digitButton = document.querySelector(`.button-${i}`)
    digitButton.addEventListener("click", () => {
      if (isNewNumber) {
        previousNumber = inputField.value
        inputField.value = i
        isNewNumber = false
        return
      }

      inputField.value += i
    })
  }

  const dotButton = document.querySelector(".button-dot")
  dotButton.addEventListener("click", () => {
    if (!inputField.value.includes(".")) {
      inputField.value += "."
    }
  })

  let lastOperation
  const operations = ["plus", "minus", "star", "division", "percent"]
  for (let operation of operations) {
    const operationButton = document.querySelector(`.button-${operation}`)
    operationButton.addEventListener("click", () => {
      if (!isNewNumber && !isNewExpression) {
        evaluate()
      }

      lastOperation = operation
      isNewNumber = true
      isNewExpression = false
    })
  }

  const radixButton = document.querySelector(".button-radix")
  radixButton.addEventListener("click", () => {
    const number = parseFloat(inputField.value)
    inputField.value = Math.sqrt(number)
  })

  const equalButton = document.querySelector(".button-equal")
  equalButton.addEventListener("click", () => {
    if (!isNewNumber && !isNewExpression) {
      evaluate()
    }

    isNewNumber = true
    isNewExpression = true
  })

  const cleanButton = document.querySelector(".button-clean")
  cleanButton.addEventListener("click", () => {
    inputField.value = "0"
    previousNumber = undefined
    isNewNumber = true
    isNewExpression = true
    lastOperation = undefined
  })

  function evaluate() {
    const firstNumber = parseFloat(previousNumber)
    const secondNumber = parseFloat(inputField.value)

    let result
    switch (lastOperation) {
      case "plus":
        result = firstNumber + secondNumber
        break
      case "minus":
        result = firstNumber - secondNumber
        break
      case "star":
        result = firstNumber * secondNumber
        break
      case "division":
        result = firstNumber / secondNumber
        break
      case "percent":
        result = firstNumber * (secondNumber / 100)
        break
      default:
        return
    }

    inputField.value = result
  }
})

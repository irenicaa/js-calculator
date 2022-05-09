window.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector(".input-field")
  let state = new CalculatorState(inputField)

  for (let i = 0; i < 10; i++) {
    const digitButton = document.querySelector(`.button-${i}`)
    digitButton.addEventListener("click", () => {
      if (state.isNewNumber) {
        state.startNewNumber(i)
        return
      }

      inputField.value += i
    })
  }

  const dotButton = document.querySelector(".button-dot")
  dotButton.addEventListener("click", () => {
    if (state.isNewNumber) {
      state.startNewNumber(".")
      return
    }

    if (!inputField.value.includes(".")) {
      inputField.value += "."
    }
  })

  const operations = ["plus", "minus", "star", "division", "percent"]
  for (let operation of operations) {
    const operationButton = document.querySelector(`.button-${operation}`)
    operationButton.addEventListener("click", () => {
      if (!state.isNewNumber && !state.isNewExpression) {
        evaluate()
      }

      state.lastOperation = operation
      state.isNewNumber = true
      state.isNewExpression = false
    })
  }

  const radixButton = document.querySelector(".button-radix")
  radixButton.addEventListener("click", () => {
    const number = parseFloat(inputField.value)
    inputField.value = Math.sqrt(number)
  })

  const equalButton = document.querySelector(".button-equal")
  equalButton.addEventListener("click", () => {
    if (!state.isNewNumber && !state.isNewExpression) {
      evaluate()
    }

    state = new CalculatorState(inputField)
  })

  const cleanButton = document.querySelector(".button-clean")
  cleanButton.addEventListener("click", () => {
    inputField.value = "0"
    state = new CalculatorState(inputField)
  })

  function evaluate() {
    const firstNumber = parseFloat(state.previousNumber)
    const secondNumber = parseFloat(inputField.value)

    let result
    switch (state.lastOperation) {
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

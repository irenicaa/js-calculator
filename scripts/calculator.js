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

  let previosNumber
  let isNewNumber = true
  let isNewExpression = true
  for (let i = 0; i < 10; i++) {
    const digitButton = document.querySelector(`.button-${i}`)
    digitButton.addEventListener("click", () => {
      if (isNewNumber) {
        previosNumber = inputField.value
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
      if (!isNewExpression) {
        evaluate()
      }

      lastOperation = operation
      isNewNumber = true
      isNewExpression = false
    })
  }

  const equalButton = document.querySelector(".button-equal")
  equalButton.addEventListener("click", () => {
    evaluate()
    isNewExpression = false
  })

  function evaluate() {
    if (lastOperation === "plus") {
      const firstNumber = parseFloat(previosNumber)
      const secondNumber = parseFloat(inputField.value)
      const result = firstNumber + secondNumber
      inputField.value = result

      return
    }

    throw new Error("unsupported operation")
  }
})

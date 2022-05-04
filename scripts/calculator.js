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
  let isNewNumber = false
  for (let i = 0; i < 10; i++) {
    const digitButton = document.querySelector(`.button-${i}`)
    digitButton.addEventListener("click", () => {
      if (isNewNumber || inputField.value === "0") {
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
  const plusButton = document.querySelector(".button-plus")
  plusButton.addEventListener("click", () => {
    lastOperation = "plus"
    isNewNumber = true
  })

  const equalButton = document.querySelector(".button-equal")
  equalButton.addEventListener("click", () => {
    if (lastOperation === "plus") {
      const firstNumber = parseFloat(previosNumber)
      const secondNumber = parseFloat(inputField.value)
      const result = firstNumber + secondNumber
      inputField.value = result
    }

    throw new Error("unsupported operation")
  })
})

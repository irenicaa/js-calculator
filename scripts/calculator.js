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

  for (let i = 0; i < 10; i++) {
    const digitButton = document.querySelector(`.button-${i}`)
    digitButton.addEventListener("click", () => {
      if (inputField.value === "0") {
        inputField.value = i
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
})

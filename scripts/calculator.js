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
    const button = document.querySelector(`.button-${i}`)
    button.addEventListener("click", () => {
      console.log(`button ${i}`)
    })
  }
})

window.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector(".input-field")
  inputField.addEventListener("input", () => {
    console.log(inputField.value)
  })
})

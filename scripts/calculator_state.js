function CalculatorState(inputField) {
  this.inputField = inputField
  this.previousNumber = undefined
  this.isNewNumber = true
  this.isNewExpression = true
  this.lastOperation = undefined
}

CalculatorState.prototype.startNewNumber = function(firstCharacter) {
  this.previousNumber = this.inputField.value
  this.inputField.value = firstCharacter
  this.isNewNumber = false
}

CalculatorState.prototype.setLastOperation = function(operation) {
  this.lastOperation = operation
  this.isNewNumber = true
  this.isNewExpression = false
}

CalculatorState.prototype.hasCompletedExpression = function() {
  return !this.isNewNumber && !this.isNewExpression
}

CalculatorState.prototype.evaluateBinaryOperation = function() {
  const firstNumber = parseFloat(this.previousNumber)
  const secondNumber = parseFloat(this.inputField.value)

  let result
  switch (this.lastOperation) {
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

  this.inputField.value = result
}

CalculatorState.prototype.evaluateSquareRoot = function() {
  const number = parseFloat(this.inputField.value)
  this.inputField.value = Math.sqrt(number)
}

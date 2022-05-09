function CalculatorState(inputField) {
  this.inputField = inputField
  this.previousNumber = undefined
  this.isNewNumber = true
  this.isNewExpression = true
  this.lastOperation = undefined
}

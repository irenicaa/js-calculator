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

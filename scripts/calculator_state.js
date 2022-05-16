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

document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('.screen p');
    const buttons = document.querySelectorAll('[class^="btn"]');
    let currentValue = '';
    let operator = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;
  
        if (value === 'C') {
          currentValue = '';
          operator = '';
          screen.textContent = '0';
        } else if (value === '=') {
          const result = calculateResult(currentValue, operator);
          screen.textContent = result;
          currentValue = result.toString();
          operator = '';
        } else if (['+', '-', '*', '/'].includes(value)) {
          if (operator) {
            currentValue = calculateResult(currentValue, operator).toString();
            operator = '';
          }
          operator = value;
          currentValue += operator;
        } else {
          currentValue += value;
          screen.textContent = currentValue;
        }
      });
    });
  
    function calculateResult(expression, operator) {
      const operands = expression.split(operator);
      const operand1 = parseFloat(operands[0]);
      const operand2 = parseFloat(operands[1]);
      let result = '';
  
      if (operator === '+') {
        result = operand1 + operand2;
      } else if (operator === '-') {
        result = operand1 - operand2;
      } else if (operator === '*') {
        result = operand1 * operand2;
      } else if (operator === '/') {
        result = operand1 / operand2;
      }
  
      return result;
    }
  });
  
document.addEventListener('DOMContentLoaded', function() {
    const displayResultado = document.querySelector('.resultado .final');
    let currentInput = '';
    let currentOperator = '';
    let resultDisplayed = false;

    // Adiciona evento de clique aos botões de números
    document.querySelectorAll('.numeros button').forEach(button => {
        button.addEventListener('click', function() {
            if (resultDisplayed) {
                clearDisplay();
                resultDisplayed = false;
            }
            currentInput += this.value;
            updateDisplay();
        });
    });

    // Adiciona evento de clique aos botões de operadores
    document.querySelectorAll('.operadores button').forEach(button => {
        button.addEventListener('click', function() {
            if (currentInput !== '') {
                if (currentOperator !== '') {
                    calculateResult();
                }
                currentOperator = this.value;
                resultDisplayed = false;
            }
        });
    });

    // Adiciona evento de clique ao botão de igual
    document.querySelector('.operadores button[value="="]').addEventListener('click', function() {
        calculateResult();
        currentOperator = '';
    });

    // Função para calcular e exibir o resultado
    function calculateResult() {
        const inputValue = parseFloat(currentInput);
        const previousValue = parseFloat(displayResultado.textContent);

        if (!isNaN(inputValue) && !isNaN(previousValue)) {
            switch (currentOperator) {
                case '+':
                    currentInput = (previousValue + inputValue).toString();
                    break;
                case '-':
                    currentInput = (previousValue - inputValue).toString();
                    break;
                case '*':
                    currentInput = (previousValue * inputValue).toString();
                    break;
                case '/':
                    currentInput = (previousValue / inputValue).toString();
                    break;
            }
            updateDisplay();
            resultDisplayed = true;
        }
    }

    // Função para atualizar o display
    function updateDisplay() {
        displayResultado.textContent = currentInput;
    }

    // Função para limpar o display
    function clearDisplay() {
        currentInput = '';
        currentOperator = '';
        updateDisplay();
    }
});

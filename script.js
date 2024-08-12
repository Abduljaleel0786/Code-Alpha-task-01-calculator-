
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'AC') {
            display.value = '';
        } else if (value === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                // Replace % with /100 for percentage calculation
                const result = eval(display.value.replace(/%/g, '/100'));
                display.value = result;
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});
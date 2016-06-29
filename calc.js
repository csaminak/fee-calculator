
// TODO: DEFINE ANY VARIABLES HERE


// TODO: DEFINE YOUR FUNCTIONS HERE


/**
 * 		EDIT ME!
 *
 * This function is called each time a button is clicked. You must decide what
 * to do in each case (most likely call another function).
 *
 * @param  {String} buttonValue   The value of the button that was clicked on, for example "6" or "+"
 */
function handleButtonClick(buttonValue) {

    updateDisplay(buttonValue);

}



/** **************************************************************
 * These are our tests. If any of them fail you will see a message
 * in the developer tools "Console" - in which case the assignment
 * will NOT be considered complete!
 *
 *                  DO NOT CHANGE THESE LINES
 ****************************************************************/

document.querySelector('.run-tests').addEventListener('click', function() {
    var testOutput = document.querySelector('.display figure');

    try {
        // Button click handler + Addition (multiple inputs)
        handleButtonClick({ value: '1' });
        console.assert(testOutput.innerHTML === '1', testOutput.innerHTML);
        handleButtonClick({ value: '3' });
        console.assert(testOutput.innerHTML === '13', testOutput.innerHTML);
        handleButtonClick({ value: '+' });
        console.assert(testOutput.innerHTML === '+', testOutput.innerHTML);
        handleButtonClick({ value: '7' });
        console.assert(testOutput.innerHTML === '7', testOutput.innerHTML);
        handleButtonClick({ value: '+' });
        console.assert(testOutput.innerHTML === '20', testOutput.innerHTML);
        handleButtonClick({ value: '2' });
        console.assert(testOutput.innerHTML === '2', testOutput.innerHTML);
        handleButtonClick({ value: '.' });
        console.assert(testOutput.innerHTML === '2.', testOutput.innerHTML);
        handleButtonClick({ value: '7' });
        console.assert(testOutput.innerHTML === '2.7', testOutput.innerHTML);
        handleButtonClick({ value: '=' });
        console.assert(testOutput.innerHTML === '22.7', testOutput.innerHTML);

        // Clear
        handleButtonClick({ value: 'clear' });
        console.assert(testOutput.innerHTML === '', testOutput.innerHTML);

        // Addition
        console.assert(add(10, 3) === 13);
        console.assert(add('10', 3) === 13);
        console.assert(add('0', 13) === 13);
        console.assert(add(0, 13) === 13);
        console.assert(add('-20', 10) === -10);

        // Subtraction
        console.assert(subtract(10, 30) === 20);
        console.assert(subtract('10', 30) === 20);
        console.assert(subtract('0', 13) === 13);
        console.assert(subtract(0, 13) === 13);
        console.assert(subtract('-20', 10) === 30);

        // Division
        console.assert(divide(30, 10) === 3);
        console.assert(divide(30, '10') === 3);
        console.assert(divide(13, '1') === 13);
        console.assert(divide(13, 1) === 13);
        console.assert(divide(0, 13) === 0);
        console.assert(divide('-2', 10) === -0.2);

        // Multiplication
        console.assert(multiply(10, 30) === 300);
        console.assert(multiply('10', 30) === 300);
        console.assert(multiply('0', 13) === 0);
        console.assert(multiply(0, 13) === 0);
        console.assert(multiply('-2', 10) === -20);

    } catch(e) {
        console.error('There was an error during the test run:', e);
    }
});


/**
 * 		DO NOT CHANGE ANY LINES BELOW HERE!!
 *
 * This event handler will fire for ALL button clicks. You need to decide
 * what to do based on which button was clicked in the handler function
 * defined above.
 */
[].slice.call(document.querySelectorAll('button')).forEach(function(element) {
    element.addEventListener('click', function() {
        handleButtonClick(this.value);
    });
});

var display = document.querySelector('.display figure');
function updateDisplay(text) {
    display.innerText = text;
}

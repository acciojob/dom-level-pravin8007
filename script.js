document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded

    // Find the element with id "level"
    const targetElement = document.getElementById('level');

    if (targetElement) {
        // Initialize the level counter
        let domLevel = 0;

        // Traverse parent nodes until the root HTML element is reached
        let currentNode = targetElement;
        while (currentNode.parentNode) {
            currentNode = currentNode.parentNode;
            domLevel++;
        }

        // Display the result using the alert() function
        alert(`The level of the element is: ${domLevel}`);
    } else {
        // Handle case where the element with id "level" is not found
        alert('Element with id "level" not found.');
    }
});
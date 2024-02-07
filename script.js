const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkPalindrome = (input) => {
    if (input === '') {
        alert('Please input a value');
        return;
    }

    const lowerCaseStr = input.replace('/[^A-Za-z0-9]/gi', '').toLowerCase(); // remove non alphanumeric characters
}
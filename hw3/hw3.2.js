function displayOddNumbers(limit) {
    let currentNumber = 1;
    while (currentNumber < limit) {
        console.log(currentNumber);
        currentNumber += 2;
    }
}

displayOddNumbers(10);

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfPrimes(limit) {
    let total = 0;
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            total += i;
        }
    }
    return total;
}

console.log(sumOfPrimes(100)); // Output: 1060

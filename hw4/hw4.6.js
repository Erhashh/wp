function gcd(a, b) {
    while (b !== 0) {
        let temp = a;
        a = b;
        b = temp % b;
    }
    return a;
}

console.log(gcd(15, 30)); // Output: 15

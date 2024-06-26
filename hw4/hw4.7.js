function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b); // Use parentheses to ensure integer division
}

let a = 6;
let b = 8;

console.log(lcm(a, b)); // Output: 24

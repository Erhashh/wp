var h = 0.01;

function f(x, y) {
    return x * x + y * y;
}

function fx(x, y) {
    return (f(x + h, y) - f(x, y)) / h;
}

function fy(x, y) {
    return (f(x, y + h) - f(x, y)) / h;
}

function grad(x, y) {
    return [fx(x, y), fy(x, y)];
}

let x = 6;
let y = 12;

console.log("x =", x, "y =", y);
console.log("df/dx =", fx(x, y)); // Changed df(dx) to df/dx for clarity
console.log("df/dy =", fy(x, y)); // Changed df(dy) to df/dy for clarity
console.log("gradient =", grad(x, y));

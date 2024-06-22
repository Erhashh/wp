function addVectors(x1, y1, x2, y2) {
    const resultX = x1 + x2;
    const resultY = y1 + y2;
    return [resultX, resultY];
}

const result = addVectors(1, 2, 3, 4);
console.log(result); // Output: [4, 7]

function addMatrices(matrixA, matrixB) {
    const result = [];

    for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    
    return result;
}

const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrixB = [
    [3, 2, 1],
    [6, 5, 4],
    [9, 8, 7]
];

console.log(addMatrices(matrixA, matrixB));
// Output: [[4, 4, 4], [10, 10, 10], [16, 16, 16]]

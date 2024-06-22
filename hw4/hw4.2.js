function minArray(a) {
    let min = a[0]; // Initialize min with the first element of the array

    for (let i = 1; i < a.length; i++) { // Start loop from i = 1
        if (a[i] < min) {
            min = a[i]; // Update min if current element is smaller
        }
    }

    return min; // Return the minimum value found in the array
}

let a = [43, 21, 543, 64, 31];
console.log(minArray(a)); // Output: 21

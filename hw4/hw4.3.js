function filter(a, b) {
    let c = [];

    for (let i = 0; i < a.length; i++) {
        if (b(a[i])) { // Call function b with current element a[i]
            c.push(a[i]); // If b returns true, push element to array c
        }
    }

    return c; // Return the filtered array
}

// Example usage: Filter odd numbers from array
console.log(filter([1, 2, 3, 4, 5, 6], function(x) {
    return x % 2 == 1; // Filter condition: return true for odd numbers
}));

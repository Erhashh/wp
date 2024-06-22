function countChar(char) {
    const count = {};

    for (let i = 0; i < char.length; i++) {
        let x = char[i]; // Use char[i] instead of str[i] to access characters in the string
        if (count[x]) {
            count[x]++;
        } else {
            count[x] = 1;
        }
    }

    return count;
}

var char = "abbcccddddeeeee";
console.log(countChar(char));

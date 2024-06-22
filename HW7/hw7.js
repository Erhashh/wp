document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const hashOutput = document.getElementById('hashOutput');

    inputText.addEventListener('input', function() {
        const text = inputText.value;
        const hash = sha256(text);
        hashOutput.textContent = hash;
    });

    function sha256(input) {
        const msgBuffer = new TextEncoder().encode(input);
        return crypto.subtle.digest('SHA-256', msgBuffer)
            .then(hashBuffer => {
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                return hashHex;
            })
            .catch(err => {
                console.error(err);
            });
    }
});

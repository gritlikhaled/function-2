function fibonacci(n) {
    if (n <= 0) return 0; // Base case: Fibonacci(0) = 0
    if (n === 1) return 1; // Base case: Fibonacci(1) = 1
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

// Test Fibonacci Function
console.log("Fibonacci(5):", fibonacci(5)); // Output: 5
console.log("Fibonacci(8):", fibonacci(8)); // Output: 21



function isPalindrome(str) {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    function checkPalindrome(left, right) {
        // Base case: pointers have crossed or are the same
        if (left >= right) return true;
        // If characters at pointers do not match
        if (cleaned[left] !== cleaned[right]) return false;
        // Recursive case: move pointers inward
        return checkPalindrome(left + 1, right - 1);
    }

    return checkPalindrome(0, cleaned.length - 1);
}

// Test Palindrome Checker
console.log("Is 'Racecar' a palindrome?", isPalindrome("Racecar")); // Output: true
console.log("Is 'A man, a plan, a canal: Panama' a palindrome?", isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log("Is 'Hello' a palindrome?", isPalindrome("Hello")); // Output: false

function power(base, exponent) {
    // Base case: any number to the power of 0 is 1
    if (exponent === 0) return 1;

    // Base case: negative exponent
    if (exponent < 0) return 1 / power(base, -exponent);

    // Recursive case: multiply base with the result of power(base, exponent - 1)
    return base * power(base, exponent - 1);
}

// Test Power Function
console.log("2^3:", power(2, 3)); // Output: 8
console.log("5^0:", power(5, 0)); // Output: 1
console.log("2^-2:", power(2, -2)); // Output: 0.25
console.log("3^4:", power(3, 4)); // Output: 81

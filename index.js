// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(n) {
    let factorl = 1;
    for (let i = 1; i <= n; i++) {
        factorl*=i;
    }
    return factorl;
}

console.log(factorialize(5));
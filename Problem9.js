let a = parseInt(prompt("Enter the cofficient of 'x2'"));
let b = parseInt(prompt("Enter the cofficient of 'x'"));
let c = parseInt(prompt("Enter the value of constant"));

firstRoot = (-b+Math.sqrt(b*b-4*a*c))/2*a;
secondRoot = (-b-Math.sqrt(b*b-4*a*c))/2*a;

console.log("Roots of quadratic equation are",firstRoot.toFixed(2),secondRoot.toFixed(2));
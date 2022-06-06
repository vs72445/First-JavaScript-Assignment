function isPalindrome(n){
    // find the reverse of n
    let rev = 0;
    for (let i=n; Math.trunc(i)>0; i/=10){
        rev =(rev*10)+(Math.trunc(i)%10);
    }
    // If rev and n are same, then n is palindrome
    return (n==rev);
}

// print palindrome between min and max numbers
function countPal(min, max){
    for(let i=min; i<=max; i++){
        if(isPalindrome(i))
        console.log(i+" ");
    }
}

// Driver program to test above function
let n = parseInt(prompt("Enter a positive number"))
countPal(0,n);
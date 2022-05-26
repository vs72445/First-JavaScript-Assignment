let number = parseInt(prompt("Enter a positive integer vale"));

if (number<0) {
    console.log("Error please enter a positive value and try again");  
}else if (number==0) {
    console.log("the value of 0th term is:",0);
}else{
    let value = 0;
    value = number*number;
    console.log("The value of",number+"th term is:",value);
}
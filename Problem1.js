let number=parseInt(prompt('Enter a positive integer'));

if(number<0){
  console.log('Error! Please enter a positve integer and try again');
}else if(number===0){
  console.log('Factorial of 0 is "1"');
}else{
      let fact=1;
      for(i=number;i>=1;i--){
          fact*=i;
      }
  console.log('Factorial of '+number+' is',fact);
}
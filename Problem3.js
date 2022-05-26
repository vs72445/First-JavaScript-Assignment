let a, area;
a = parseInt(prompt('Enter a positive number for the side of equalateral triangle'));
area =  Math.sqrt(3)/4*(a*a);
console.log('Area of equalateral triangle of side '+a+' is : '+area.toFixed(2));
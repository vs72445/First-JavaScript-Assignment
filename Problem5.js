let tempInCelcius, tempInFahrenheit;

tempInCelcius = parseInt(prompt('Enter any temperature in "celcius"'));

tempInFahrenheit = tempInCelcius*(9/5)+32;

console.log(tempInCelcius+' degree Celcius is',tempInFahrenheit.toFixed(2),'degree Fahrenheit');
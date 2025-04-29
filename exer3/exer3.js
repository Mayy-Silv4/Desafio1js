var celsius;

celsius= prompt("Informe a temperatura em graus celsius:");

celsius= parseFloat(celsius);

fahrenheit = celsius * 9 / 5 + 32;

document.getElementById('mensagem').innerHTML= ` ${celsius}°C equivalem a ${fahrenheit}°F`
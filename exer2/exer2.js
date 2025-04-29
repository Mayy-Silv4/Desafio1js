var largura, altura, area;

largura=prompt("Informe a largura em metros:");
altura=prompt("Informe a altura em metros:");

largura= parseFloat(largura);
altura= parseFloat(altura);

area= largura*altura;


    document.getElementById('mensagem').innerHTML= `A área do retângulo de  ${largura} m de largura por ${altura} m de altura é ${area} m²`
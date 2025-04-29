var nota1, nota2, nota3, media;
        
nota1= prompt("Informe a primeira nota:");
nota2= prompt("Informe a segunda nota:");
nota3= prompt("Informe a terceira nota:");

nota1= parseFloat(nota1);
nota2= parseFloat(nota2);
nota3=parseFloat(nota3);

media= (nota1+ nota2+ nota3)/3;

document.getElementById('mensagem').innerHTML= ` A média é ${media} pontos`
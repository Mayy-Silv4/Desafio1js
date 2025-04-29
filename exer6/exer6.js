
var numero;

numero= parseInt(prompt("Informe um número inteiro:"));

numero= parseFloat(numero);

if(numero%2==0){

    document.getElementById('mensagem').innerHTML= `O número ${numero} é par`;

}else{

    document.getElementById('mensagem').innerHTML= `O número ${numero} é impar`;
}

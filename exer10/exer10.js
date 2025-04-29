var numero1, numero2, operacao, resultado;

numero1= prompt("Digite um número:");
numero2=prompt("Digite um número:");
operacao= prompt("escolha uma operação (+, -, *, /):");

numero1=parseFloat(numero1);
numero2=parseFloat(numero2);

switch(operacao){

    case "+":

    resultado= numero1+numero2;

    break;

    case "-":

    resultado= numero1-numero2;

    break;

    case "*":

    resultado= numero1*numero2;

    break;

    case "/":

    if (numero2 !== 0) {
        resultado = numero1 / numero2;

    }else{
        resultado= "não é possivel dividir por zero.";

    }

    break;

    default:
    resultado = "Operação inválida.";

    

}

document.getElementById('mensagem').innerHTML = `Resultado de ${numero1} ${operacao} ${numero2} = ${resultado}`;


var numero1, numero2;

numero1= prompt("Digite um número (1):");
numero2= prompt("Digite um número (2):");

numero1= parseFloat(numero1);
numero2= parseFloat(numero2);

if(numero1>numero2){

    document.getElementById('mensagem').innerHTML= `Entre o número ${numero1} e o ${numero2}, o maior é o: ${numero1}.  `
}else if(numero2>numero1){
    document.getElementById('mensagem').innerHTML= `Entre o número ${numero1} e o ${numero2}, o maior é o: ${numero2}.`
}else {         
    
    document.getElementById('mensagem').innerHTML= `Os números são iguais. `

}
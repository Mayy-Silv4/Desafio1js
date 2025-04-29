var nota;

nota= Number(prompt("Insira uma nota de 0 a 100:"));

if(nota>=70){

    document.getElementById('mensagem').innerHTML=`Aprovado!`
}else if(50>=69){
    document.getElementById('mensagem').innerHTML=`Reprovado!`
}else{

    document.getElementById('mensagem').innerHTML=`Reprovado!`
}
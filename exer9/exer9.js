var ano;

ano= prompt("informe um ano:");

ano= parseInt(ano);

if((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)){

    document.getElementById('mensagem').innerHTML=`O ano ${ano} é bissexto.`
}else{

    document.getElementById('mensagem').innerHTML=`O ano não é bissexto.`
}
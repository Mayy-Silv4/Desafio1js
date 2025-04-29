var n, resultado;
n= Number(prompt("Informe um número para ver a tabuada:"));
resultado= "Tabuada do "+n+"<br>";
for(i=1; i<=10; i++){

    resultado += n +" x " +i+" = "+ (i*n)+" <br>";




}

document.getElementById('mensagem').innerHTML=resultado;

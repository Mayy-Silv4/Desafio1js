var n, soma, i, res="resultado: ";

n=Number(prompt("Digite um valor N:"));
i=1; soma=0;
while(i<=n){
    res+= i+" ";
    soma+=i;
    i++;
}
document.getElementById('mensagem').innerHTML= res+"<br> a soma é: "+soma;


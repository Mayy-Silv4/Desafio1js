var n,  res, termo1, termo2, sequencia;

termo1=0;
termo2=1;
sequencia=" ";
n = Number(prompt("Quantos termos da sequência de Fibonacci você deseja? "));




if (n <= 0){
   document.getElementById('mensagem').innerHTML=`favor, digite um número inteiro positivo.` ;
}else if(n == 1){
    document.getElementById('mensagem').innerHTML=`Sequência de Fibonacci com 1 termo: ${termo1}`;
}else{
   sequencia= `${termo1}, ${termo2}`;
    
    for(var i=2; i<n; i++){
         res = termo1 + termo2;
         sequencia += `, ${res}`;
         termo1 = termo2;
         termo2 = res;
}

document.getElementById('mensagem').innerHTML= `Sequência de Fibonacci: ${sequencia}`;
    
    
        
    }
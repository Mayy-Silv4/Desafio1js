var n, sequencia;

sequencia= " ";

n= prompt("Informe um valor para N:");

n= parseInt(n);

for (var i = 1; i <= n; i++) {

    if(i==n){
        sequencia+=i;
    }else{
        sequencia +=i+ ",";
        
        
    }
    
    
}

     document.getElementById('mensagem').innerHTML = `Sequência de 1 até ${n}: ${sequencia}`;
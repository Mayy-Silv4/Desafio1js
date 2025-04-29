var peso, altura, IMC;


   peso=prompt("Informe o seu peso:");
   altura=prompt("Informe a sua altura:");
   
   peso= parseFloat(peso);
   altura= parseFloat(altura);

   IMC= peso/(altura*2);

   document.getElementById('mensagem').innerHTML= `Seu IMC é de ${IMC}`;
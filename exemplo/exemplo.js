var 
nome, anoNascimento, idade, peso;

nome = prompt("Digite o seu nome:");
anoNascimento = Number(prompt("Informe o seu ano de nascimento:"));
peso = parseFloat(prompt("Informe seu peso:"));

idade = 2025 - anoNascimento;
if(idade>=18){

document.getElementById('mensagem').innerHTML= `${nome} você nascido em ${anoNascimento} <br> você tem ${idade} anos de idade e o seu peso é de ${peso}` 

 
}else{
    document.getElementById('mensagem').innerHTML= `${nome} você nascido em ${anoNascimento} <br>  você tem <strong> ${idade} anos de idade </strong> e você é filhotinho da mamãe!` 
}
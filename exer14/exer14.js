var n, fatorial;

n = Number(prompt("Digite um número inteiro:"));
n = parseInt(n);
fatorial = 1;

if (n < 0) {
    document.getElementById('mensagem').innerHTML = "Fatorial não existe para números negativos.";
} else {
    for (var i = 1; i <= n; i++) {
        fatorial *= i;
    }
    document.getElementById('mensagem').innerHTML = `O fatorial de ${n} é : ${fatorial}.`;
}


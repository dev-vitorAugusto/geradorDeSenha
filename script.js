const botaoGerar = document.getElementById('botaoGerar');
const tema = document.getElementById("mudarTema");
const temaClaro = document.getElementById("light-mode");
const temaEscuro = document.getElementById("dark-mode");

// FUNÇÃO PARA AUMENTAR OU DIMINUIR TAMANHO DA SENHA
function alterarTamanho(valor) {
    let input = document.getElementById("tamanhoSenha");
    let novoValor = parseInt(input.value) + valor; 

    if (novoValor >= 4 && novoValor <= 16) {
        input.value = novoValor;
    }
}

botaoGerar.addEventListener('click', function() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let senha = ""; 
    let tamanhoSenha = parseInt(document.getElementById('tamanhoSenha').value);
    for (let i = 0; i < tamanhoSenha; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));   
    }

    document.getElementById("senha").classList.add("teste");     
    document.getElementById("senha").value = senha; 

    avaliarForca(senha);
})

function avaliarForca(senha) {
    let forca = 0;

    if (senha.length >= 5) forca++; 
    if (senha.match(/[A-Z]/)) forca++; 
    if (senha.match(/[0-9]/)) forca++; 
    if (senha.match(/[\W_]/)) forca++; 

    let barra = document.getElementById("forcaSenha");
    let texto = document.getElementById("textoForca");

    if (forca === 1) {
        barra.style.width = "25%";
        barra.style.backgroundColor = "red";
        texto.innerText = "Senha Fraca 🔴";
    } else if (forca === 2) {
        barra.style.width = "50%";
        barra.style.backgroundColor = "orange";
        texto.innerText = "Senha Média 🟡";
    } else if (forca === 3) {
        barra.style.width = "75%";
        barra.style.backgroundColor = "yellowgreen";
        texto.innerText = "Senha Boa 🟢";
    } else if (forca === 4) {
        barra.style.width = "100%";
        barra.style.backgroundColor = "green";
        texto.innerText = "Senha Forte 💪";
    } else {
        barra.style.width = "0%";
        texto.innerText = "Senha -";
    }
}

// MUDAR TEMA
tema.addEventListener('click', function() {

    document.body.classList.toggle("dark-mode");
    
    
});






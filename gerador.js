senhaGerada = document.querySelector('.senhaGerada');
botao = document.querySelector('.botao');


const gerarSenha = () => {
    numeroAleatorio = Math.random().toString(30).slice(2);
    senhaGerada.innerHTML = `Senha gerada: ${numeroAleatorio}`;
}

botao.addEventListener('click', gerarSenha);

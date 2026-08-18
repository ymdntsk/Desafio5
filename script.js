/* Carregamento do DOM - utilizando com funçoes complexas que dependem do DOM */
document.addEventListener('DOMContentLoaded', (event) =>  {
    console.log('DOM carregado e está pronto para Usar!');
});

/* Disparo Por meio de SUBMIt de formulário */

const meuForm = document.getElementById('meuForm');
meuForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('o evento submit foi interceptado');
    const msg = document.getElementById('msg');

    const valorInput = document.getElementById('meuInput').value;

    if(valorInput.length === 10){
        msg.textContent = 'Vc digitou 10 caracteres!';
        msg.style.color = 'green';
    }else{
        msg.textContent = 'Vc digitou menos de 10 caracteres!';
        msg.style.color = 'orange';
    }
});


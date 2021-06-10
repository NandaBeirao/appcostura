_const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '') {

        const valorIMC = (altura / Math.PI).toFixed(1);

        let classificacao = '';

 

        resultado.textContent = `${nome} faça um círculo de ${valorIMC} cm de diâmetro `;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);

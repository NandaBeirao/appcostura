const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '') {

        const valorIMC = (peso/Math.PI).toFixed(1);

        let classificacao = '';

 

        resultado.textContent = `${nome}, faça uma circunferencia com ${valorIMC} cm de diâmetro para que a fita de a volta completa `;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);

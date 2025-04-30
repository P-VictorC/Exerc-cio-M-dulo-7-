const form = document.querySelector('.formulario');
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const valor1 = campoA.value
    const valor2 = campoB.value
    const mensagemSucess = 'O resultado dos numeros inseridos é valido'
    const mensagemError = 'O resultado dos numeros inseridos é invalido'
    const resultado = document.querySelector('.mensagemValidacao')
    const errorNum = document.querySelector('.mensagemNum')
    const validation = document.querySelector('mensagemValidacao')

    if (isNaN(valor1) || isNaN(valor2)){
        errorNum.style.display = 'block'
    }
    else if(Number(valor1) < Number(valor2)){
        document.querySelector('.mensagemValidacao').style.display = 'block'
        resultado.textContent = mensagemSucess
        }
        else{
        document.querySelector('.mensagemValidacao').style.backgroundColor = 'rgb(204, 62, 62)';
        document.querySelector('.mensagemValidacao').style.display = 'block'
        resultado.textContent = mensagemError
        }
})

campoA.addEventListener('change', cleanMessage )

function cleanMessage() {
    limparMensagemErro = document.querySelector('.mensagemValidacao').style.display = 'none'
    limparMEnsagemSucess = document.querySelector('.mensagemNum').style.display = 'none'
}

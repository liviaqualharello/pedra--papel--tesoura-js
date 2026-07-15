let ppt = ['PEDRA', 'PAPEL', 'TESOURA']

function jogar(usuario){
    let computador = ppt[Math.floor(Math.random() * ppt.length)];
    let resultado = ''

if (usuario === computador) {
    resultado = 'Empate'
}else if(
        (usuario === 'PEDRA' && computador === 'TESOURA')||
        (usuario === 'PAPEL' && computador === 'PEDRA')||
        (usuario === 'TESOURA' && computador === 'PAPEL')
)    {resultado = 'Você ganhou'
}else{
    resultado = 'Você perdeu'
}

document.getElementById('resultado').innerHTML =
    `Você escolheu: ${usuario}<br> 
    O computador escolheu: ${computador}<br>
    Resultado: ${resultado}`
}
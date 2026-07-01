const numero = document.getElementById('number')
const btnDiminuir = document.getElementById('subtracao')
const btnAumentar = document.getElementById('adicao')
const btnAumentar1 = document.getElementById('adicao1')
const btnAumentar2 = document.getElementById('adicao2')
const btnAumentar3 = document.getElementById('adicao3')
const precoProduto = document.getElementById('preco')

let contador = 0
let preco = 2.99



btnAumentar.addEventListener('click', () => {
    contador++
    preco = preco + 2.99
    numero.textContent = contador
    precoProduto.innerHTML = ` <p>R$ ${preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <p> `
})


btnDiminuir.addEventListener('click', () => {


    contador--
    

    if (contador < 0) {
        alert('Não pode valores negativos')
        contador = 0

    } else {
        preco = preco - 2.99
        numero.textContent = contador
        precoProduto.innerHTML = ` <p>R$ ${preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <p> `

    }

})

btnAumentar1.addEventListener('click', () => {
    contador = 1
    numero.textContent = contador
})
btnAumentar2.addEventListener('click', () => {
    contador = 2
    numero.textContent = contador
})
btnAumentar3.addEventListener('click', () => {
    contador = 3
    numero.textContent = contador
})










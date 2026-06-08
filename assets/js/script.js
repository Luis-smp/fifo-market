const modalProduto = document.querySelector('#modalProduto');
const fecharModal = document.querySelector('#fecharModal');
const fundoModal = document.querySelector('.fundo-modal');
const cardsProdutos = document.querySelectorAll('.card-produto');

cardsProdutos.forEach((card) => {
    card.addEventListener('click', () => {
        modalProduto.classList.add('ativo');
    });
});

fecharModal.addEventListener('click', () => {
    modalProduto.classList.remove('ativo');
});

fundoModal.addEventListener('click', () => {
    modalProduto.classList.remove('ativo');
});
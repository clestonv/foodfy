const modalOverlay = document.querySelector('.modal-overlay')
const receitas = document.querySelectorAll('.card-receita')
const modal = document.querySelector('.modal')

for (let receita of receitas ) {
    receita.addEventListener('click', function() {
        modalOverlay.classList.add('active')
        modal.innerHTML = receita.innerHTML
    })
}


document.querySelector('.close').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})
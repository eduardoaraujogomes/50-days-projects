const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const icone = document.querySelector('i')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    changingIcone()
    input.focus()

})

changingIcone = () => {
    if (icone.classList.contains('fa-search')) {
        icone.classList.remove('fa-search')
        icone.classList.add('fa-times')
    } else {
        icone.classList.remove('fa-times')
        icone.classList.add('fa-search')
    }
}





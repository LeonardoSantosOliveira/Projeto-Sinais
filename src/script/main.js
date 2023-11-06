document.addEventListener('DOMContentLoaded', function(){
    const saibabtn = document.querySelector('#detalhes-btn')
    const sectionDetalhes = document.querySelector('#detalhes')

    saibabtn.addEventListener('click', function(e){
        sectionDetalhes.scrollIntoView({behavior: 'smooth'})
    })
})


const grande  = document.querySelector('.carrusel')
const punto   = document.querySelectorAll('.punto')
const before = document.getElementById('before')
const flechauno = document.querySelectorAll('.slider-arow2')
const flechas = document.querySelectorAll('.slider-arow')





punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{
        let posicion = i
        let operacion = posicion * -20


        grande.style.transform = `translateX(${ operacion }%)`


        punto.forEach((cadaPunto,i)=>{
            punto[i].classList.remove('activo')
        })

        punto[i].classList.add('activo')

    })
})
flechauno.forEach( ( cadaFlecha , i )=> {
    flechauno[i].addEventListener('click',()=>{
        let posicion = i++
        let operacion = posicion * -20
        grande.style.transform = `translateX(${ operacion }%)`


flechas.forEach((cadaFlecha,i)=>{
    flechas[i].classList.remove('active')
})

flechas[i].classList.add('active')
    })  
})

flechas.forEach( ( cadaFlecha , i )=> {
    flechas[i].addEventListener('click',()=>{
        let posicion = i--
        let operacion = posicion * -50
        grande.style.transform = `translateX(${ operacion }%)`
    })
})
// const lista = document.querySelector("ul")
// let segundoHijo = lista.children[1]
// let cuartoHijo = lista.children[3]
// segundoHijo.classList.add('verde')
// cuartoHijo.classList.add('rojo')
// // console.log(lista.children)


// console.log(cuartoHijo.parentElement)


// segundoHijo.parentElement.classList.add('naranja')



// const bodyElement = document.body

// let titulo = document.createElement('h1')
// let parrafo = document.createElement('p')
// parrafo.textContent = 'Donec venenatis vulputate lorem. Maecenas vestibulum mollis diam.'
// titulo.textContent = 'Vestibulum suscipit nulla quis orci'
// bodyElement.appendChild(titulo)
// bodyElement.appendChild(parrafo)


// const confirmarCreacion = () => alert('Usuario creado!') // callback


// const crearUsuario = (calback) => {
//     let Usuario = prompt('por favor, ingrese su nombre')
//     console.log(Usuario)
//     return calback()
// }


// crearUsuario(confirmarCreacion)


const validarMayusculas = (string) => {
    if (string === string.toUpperCase()) {
        return true
    }
    return false
}


const validarUsuario = (validador) => {
    let nombre = prompt('ingrese su nombre')

    if (validador(nombre)) {
        alert('usuario tienen letras mayusculas')
    } else {
        alert('usuario NO tienen letras mayusculas')
    }

}



validarUsuario(validarMayusculas)
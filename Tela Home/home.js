'use strict'

const nome = document.getElementById('usuario')
const imgUsuario = document.getElementById('foto')
const botaoPerfil = document.getElementById('meu_perfil')
const bebidas = document.getElementById('Bebidas')
const salgadas = document.getElementById('Pizzas Salgadas')
const doces = document.getElementById('Pizzas Doces')
const sobremesas = document.getElementById('Sobremesas')

const imagemPizza = document.getElementById('pizza_foto')

const montarUser = () =>{
    const usuario = localStorage.getItem('user')
    const img = localStorage.getItem('img')
    
    nome.textContent = `Bom dia, ${usuario}`
    imgUsuario.src = `${img}`
}
montarUser()


const organizarPizzasFavoritas = async ()  => {
    const url = `http://localhost:8080/pizzasInfo`
    const response = await fetch(url)
    const pizza = await response.json()
    
    const container = document.getElementById('sabores')
    
    pizza.pizzasArray.forEach(item => {
        if(item.favorita){
            const cardDiv = document.createElement('div')
            cardDiv.classList.add('pizzas')
            cardDiv.innerHTML = `
            <img src="${item.foto}" alt="" id="pizza__foto">
            <p id="preco">R$${item.preco}</p>
            <div class="foto__info" id="foto__info">${item.nome}</div>
            `
            container.appendChild(cardDiv)
        }
    })
}

organizarPizzasFavoritas()

const organizarPizzasRecomendadas = async () => {
    const url = `http://localhost:8080/pizzasInfo`
    const response = await fetch(url)
    const pizza = await response.json()
    
    const container = document.getElementById('tipos')
    
    pizza.pizzasArray.forEach(item => {
        if(!item.favorita){
            const cardDiv = document.createElement('div')
            cardDiv.classList.add('pizza__recomendada')
            cardDiv.innerHTML = `
            <img src="${item.foto}" alt="">
            <p>R$${item.preco}</p>
            <div class="img__info">${item.nome}</div>
            `
            container.appendChild(cardDiv)
        }
    })
}

organizarPizzasRecomendadas()

const organizarBebidas = async () => {
    const url = `http://localhost:8080/bebidas`
    const response = await fetch(url)
    const bebidas = await response.json()
    
    const container = document.getElementById('bebidas-catalogo')
    
    bebidas.bebidas.forEach(item => {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('bebida')
        cardDiv.innerHTML = `
        <img src="${item.foto}" alt="">
        <div class="bebida__descricao">
        <span>${item.nome} ${item.tamanho}</span>
        <p>${item.descricao}</p>
        </div>
        <div class="preco">
        <p id="preco">R$${item.preco}</p>
        </div>
        `
        container.appendChild(cardDiv)
    })
}
organizarBebidas()

const montarCategorias = async () =>{
    const url = `http://localhost:8080/categorias`
    const retorno = await fetch(url)
    const categorias = await retorno.json()
    console.log(categorias);
    
    const container = document.getElementById('itens')
    const rotulo = document.getElementById('rotulo')
    
    categorias.categorias.forEach(item => {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('categoria')
        cardDiv.innerHTML = `
        <img src="${item.foto}" alt="Icone produto" id-categoria="${item.id}" id="${item.nome}">
        `
        container.appendChild(cardDiv)

        const pizzas = document.getElementById('Pizza')
        pizzas.addEventListener('click', async () =>{
    
            rotulo.textContent = "Todas as Pizzas"
            
            const url = `http://localhost:8080/pizzasInfo`
            const response = await fetch(url)
            const pizza = await response.json()
        
            const container = document.getElementById('sabores')
            container.replaceChildren('')
        
            pizza.pizzasArray.forEach(item => {
                    const cardDiv = document.createElement('div')
                    cardDiv.classList.add('pizzas')
                    cardDiv.innerHTML = `
                        <img src="${item.foto}" alt="" id="pizza__foto">
                        <p id="preco">R$${item.preco}</p>
                        <div class="foto__info" id="foto__info">${item.nome}</div>
                    `
                    container.appendChild(cardDiv)
            })
        })
        
    })
}
montarCategorias()

// const vegetarianas = document.getElementById('Pizzas Vegetarianas')

// vegetarianas.addEventListener('click', async () =>{
//     rotulo.textContent = "Pizzas Vegetarianas"

//     const url = `http://localhost:8080/pizzasInfo`
//     const response = await fetch(url)
//     const pizza = await response.json()

//     const urlC = `http://localhost:8080/categorias`
//     const retorno = await fetch(urlC)
//     const categorias = await retorno.json()
//     console.log(categorias);

//     const container = document.getElementById('sabores')
//     container.replaceChildren('')
//     const idCategoria = document.getElementById(item.id)
    
//     pizza.pizzasArray.forEach(item => {
//             item.categorias.forEach(elemento =>{
//                 if(elemento.id  == idCategoria){
//                     const cardDiv = document.createElement('div')
//                     cardDiv.classList.add('pizzas')
//                     cardDiv.innerHTML = `
//                         <img src="${item.foto}" alt="" id="pizza__foto">
//                         <p id="preco">R$${item.preco}</p>
//                         <div class="foto__info" id="foto__info">${item.nome}</div>
//                     `
//                     container.appendChild(cardDiv)
//                 }
//             })
//     })
// })



botaoPerfil.addEventListener('click', () =>{
    window.location.href = '../Tela Meu Perfil/perfil.html'
})
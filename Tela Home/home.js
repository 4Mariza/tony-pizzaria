'use strict'

const nome = document.getElementById('usuario')
const imgUsuario = document.getElementById('foto')
const botaoPerfil = document.getElementById('meu_perfil')

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

    let pizzas = []
    pizzas.push(pizza)

    console.log(pizza);

    const container = document.getElementById('sabores')

    pizzas.forEach(item => {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('pizzas')
        cardDiv.innerHTML = `
            <img src="${item.foto}" alt="" id="pizza__foto">
            <p id="preco">R$${item.preco}</p>
            <div class="foto__info" id="foto__info">${item.nome}</div>
        `
        container.appendChild(cardDiv)
    })

}

organizarPizzasFavoritas()

botaoPerfil.addEventListener('click', () =>{
    window.location.href = '../Tela Meu Perfil/perfil.html'
})
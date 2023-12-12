'use strict'

const botao = document.getElementById("botao")
const imgPerfil = document.getElementById("img-perfil")

const getData = async () => {
    const local = document.getElementById("local")
    const foto = document.getElementById('foto')
    const telefone = document.getElementById("telefone")
    const nome = document.getElementById("nome")
    const endereco = document.getElementById("endereco")
    const email = document.getElementById("email")

    const url = 'http://localhost:8080/usuarios'
    const response = await fetch(url)
    const usuario = await response.json()
    
    foto.style.backgroundImage = `url(..${usuario.foto})`
    nome.textContent = usuario.nome
    local.textContent = ""
    telefone.textContent = usuario.telefone
    email.textContent = usuario.email
    endereco.textContent = usuario.endereco

    console.log( usuario);
    return usuario
}

console.log(getData())

let foto

imgPerfil.addEventListener("change", () => {
    let file = imgPerfil.files[0]
  
    if (file) {
      const reader = new FileReader()
  
      reader.addEventListener("load", (e) => {
        const render = e.target;
        const img = document.getElementById("foto")
        foto = render.result
        img.src = foto
      })
  
      reader.readAsDataURL(file);
    } 
  })
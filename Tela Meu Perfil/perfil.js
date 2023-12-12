'use strict'

const botao = document.getElementById("botao")
const imgPerfil = document.getElementById("img-perfil")
const botaoVoltar = document.getElementById('voltar')

const local = document.getElementById("local")
const foto = document.getElementById('foto')
const telefone = document.getElementById("telefone")
const nome = document.getElementById("nome")
const endereco = document.getElementById("endereco")
const email = document.getElementById("email")

  const montarPerfil = () => {
    const usuario = localStorage.getItem('user')
    const telefoneUsuario = localStorage.getItem('telefone')
    const emailUsuario = localStorage.getItem('email')
    const localizacao = localStorage.getItem('localizacao')
    const img = localStorage.getItem('img')

    console.log(usuario);

    nome.textContent = `${usuario}`
    foto.src= `${img}`
    telefone.textContent = `${telefoneUsuario}`
    email.textContent = `${emailUsuario}`
    endereco.textContent = `${localizacao}`
  }
  
  montarPerfil()
  
  imgPerfil.addEventListener("change", () => {
    let foto
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

  botaoVoltar.addEventListener('click', () =>{
    window.location.href = '../Tela Home/home.html'
  })
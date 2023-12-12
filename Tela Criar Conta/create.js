"use strict";

const imgPerfil = document.getElementById("img-perfil")
const button = document.getElementById("botao-criar")

let foto

const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

async function cadastrarUsuario(usuario) {
  const url = "http://localhost:8080/usuarios"
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  }
  const response = await fetch(url, options)
  console.log(response.ok)
  return response.ok
}

imgPerfil.addEventListener("change", () => {
  let file = imgPerfil.files[0]

  if (file) {
    const reader = new FileReader()

    reader.addEventListener("load", (e) => {
      const render = e.target;
      const img = document.getElementById("img-user")
      foto = render.result
      img.src = foto
    });

    reader.readAsDataURL(file);
  } 
})

button.addEventListener("click", () => {
  const senha = document.getElementById("senha").value;

  if (senha == document.getElementById("confirmacao").value) {
    const user = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      telefone: document.getElementById("telefone").value,
      foto,
      senha,
    }

    cadastrarUsuario(user);
  }else {
    alert('Senhas devem ser iguais!!')
  }
})


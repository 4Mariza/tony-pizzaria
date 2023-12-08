'use strict'

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  async function cadastrarUsuario(usuario){
    const url = 'http://localhost:8080/usuarios'
    const options = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch (url,options)
    console.log(response.ok)
    return response.ok
}

// TESTE
const usuarioNovo = {
    nome:'jose',
    email:'jose@gmail.com',
    telefone:'(11)94577-1205',
    foto:'../img/',
    senha:'abcdef74'
}
cadastrarUsuario(usuarioNovo)
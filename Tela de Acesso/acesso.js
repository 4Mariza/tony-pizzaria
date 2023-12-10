'use strict'

const login = document.getElementById('login')
const email = document.getElementById('email')
const senha = document.getElementById('password')

login.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const url = 'http://localhost:8080/login'
    const response = await fetch(url, {
        body: JSON.stringify({email: email.value, senha: senha.value}),
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data = await response.json()

    console.log(data);
    if(response.status == 200)
        window.location.href = "../Tela Home/home.html"
})
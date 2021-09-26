
let Form = document.getElementById('MyForm');
let name = document.getElementById('name')
let email = document.getElementById('email')
let btn = document.querySelector('button')

Form.addEventListener('submit', getUser_details)

function getUser_details(e) {
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    e.preventDefault()
    name = name.value
    email = email.value
    sessionStorage.setItem('name', name)
    sessionStorage.setItem('email', email)
    window.location.href = window.location.href.replace('signin.html','home.html')
}
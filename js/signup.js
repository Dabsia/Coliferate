
        
let Form = document.getElementById('form');
let btn = document.getElementById('home');
let main = document.querySelector('main');
let newBox = document.querySelector('.newBox')
let success = document.querySelector('.success')

Form.addEventListener('submit', getNewUser_details)

function getNewUser_details(e) {
    e.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let number = document.getElementById('number')
    name = name.value;
    email = email.value;
    number = number.value
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('number', number);
    main.style.display = 'none'
    newBox.style.display = 'flex'
    success.style.display = 'block'
    window.location.href = window.location.href.replace('signup.html','home.html')
}



    

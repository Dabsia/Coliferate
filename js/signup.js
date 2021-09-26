
        
let Form = document.getElementById('form');


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
    
}


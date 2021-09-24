setTimeout(ShowSplash, 3000)

function ShowSplash(){
    let splash = document.querySelector('.splash__screen');
    let Get__started = document.querySelector('.started');
    splash.style.display = 'none'
    Get__started.style.display = 'block'
}

let CTA = document.getElementById('CTA')
CTA.addEventListener('click', Redirect)
function Redirect() {
    let url = 'http://127.0.0.1:5500/'
    window.location.href += 'signup.html'
}
console.log(window.location.href)
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
    window.location.href += 'signin.html'
}

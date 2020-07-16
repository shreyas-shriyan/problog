let form = document.querySelector('form')

const login = () => {
    let userName = document.getElementById('userName').value
    let password = document.getElementById('password').value
    localStorage.setItem('logged_user',userName)
    window.location.href = 'index.html'
}

const start=()=>{
   form.addEventListener('submit',login)
}
window.addEventListener('load',start)
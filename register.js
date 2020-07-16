let form = document.querySelector('form')

const register = () => {
    event.preventDefault()
    let userName = document.getElementById('name1').value
    let email = document.getElementById('email1').value
    let password = document.getElementById('password1').value
    let User = {name:userName,email:email,password:password}

    let allUsers = JSON.parse(localStorage.getItem('allUsers'))
    if(!allUsers){
        localStorage.setItem('allUsers',[User])
    }else{
        allUsers.push(User)
    }
}

const start=()=>{
   form.addEventListener('submit',register)
}
window.addEventListener('load',start)
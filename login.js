let form = document.querySelector('form')

const login = () => {
    event.preventDefault()
    let userName = document.getElementById('userName').value
    let password = document.getElementById('password').value
    localStorage.setItem('loggedUser',userName)
    rediract()
    // location = 'index.html'
}

const rediract = ()=>{
    let currentPage = JSON.parse(localStorage.getItem('currentPage'))
    let currentId = JSON.parse(localStorage.getItem('currentID'))
    if(!currentPage){
        location = "index.html"
    }else if(!currentId){
        location = "posts.html"
    }else if(currentId){
        location = "postPage.html"
    }
}
const start=()=>{
   form.addEventListener('submit',login)
}
window.addEventListener('load',start)
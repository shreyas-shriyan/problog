const start = () => {
    let id = JSON.parse(localStorage.getItem('currentId'))
    let currentPage = JSON.parse(localStorage.getItem('currentPage'))
    let object = JSON.parse(localStorage.getItem('postObject'))
    let title = document.getElementById('postTitle')
    let content = document.getElementById('postContent')
    console.log(id)
    console.log(object[currentPage][`${id}`])
}

window.addEventListener('load',start)
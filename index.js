start = () => {
    let data = {"js":[{"id":1,"title":"When and why to use typescript","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"js"},{"id":2,"title":"Implementing Zoom and Pan in Just 69 Lines of Javascript","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"js"},{"id":3,"title":"A beginner's guide to understanding Closures in JavaScript","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"js"},{"id":4,"title":"How to Check if Object is Empty in JavaScript","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"js"}],"c":[{"id":1,"title":"C Programming from 0 to 1","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"c"},{"id":2,"title":"<complex.h> header file in C with Examples","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"c"},{"id":3,"title":"Why should every programmer learn C?","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"c"},{"id":4,"title":"How To Easily Install The C-Programming Language On Windows","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"c"}],"go":[{"id":1,"title":"Learning Golang in 24 Hours","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"go"},{"id":2,"title":"Why Golang is a must for your developer toolkit?","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"go"},{"id":3,"title":"Why Golang is the future?","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"go"},{"id":4,"title":"How Fast Is Golang?","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"go"}],"python":[{"id":1,"title":"Basic Data Types in Python 3: Booleans","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"python"},{"id":2,"title":"Quickly Use Bootstrap 4 in a Django Template with a CDN","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"python"},{"id":3,"title":"Learning pandas by Exploring COVID-19 Data","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"python"},{"id":4,"title":"Reporting Exceptions in Python Scripts with Sentry","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","author":"shreyas","category":"python"}]}
    localStorage.setItem('postObject',JSON.stringify(data))
   

    let python = document.getElementById('pythonLink')
    let c = document.getElementById('cLink')
    let js = document.getElementById('jsLink')
    let go = document.getElementById('goLink')

    go.addEventListener('click',() =>{
        localStorage.setItem('currentPage',JSON.stringify("go"))
    })

    python.addEventListener('click',() =>{
        localStorage.setItem('currentPage',JSON.stringify("python"))
    })

    c.addEventListener('click',() =>{
        localStorage.setItem('currentPage',JSON.stringify("c"))
    })

    js.addEventListener('click',() =>{
        localStorage.setItem('currentPage',JSON.stringify("js"))
    })
}
const addLinks = (value) => {
    console.log('helo')
    localStorage.setItem('currentPage',JSON.stringify(value))
}

const updateLinkToLocal = () => {

    localStorage.setItem('currentPage',)
}

window.addEventListener('load',start)
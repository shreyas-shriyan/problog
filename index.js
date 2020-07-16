start = () => {
    let data = {
        "js":[
            {
                "id":1,
                "title":"When and why to use typescript",
                "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "author":"shreyas",
                "category":"js"
            },
            {
                "id":2,
                "title":"Implementing Zoom and Pan in Just 69 Lines of Javascript",
                "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "author":"shreyas",
                "category":"js"
            },
            {
                "id":3,
                "title":"A beginner's guide to understanding Closures in JavaScript",
                "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "author":"shreyas",
                "category":"js"
            },
            {
                "id":4,
                "title":"How to Check if Object is Empty in JavaScript",
                "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "author":"shreyas",
                "category":"js"
            }
        ],
        "c":[
            {
                "id":1,
                "title":"C Programming from 0 to 1",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"c"
            },
            {
                "id":2,
                "title":"<complex.h> header file in C with Examples",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"c"
            },
            {
                "id":3,
                "title":"Why should every programmer learn C?",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"c"
            },
            {
                "id":4,
                "title":"How To Easily Install The C-Programming Language On Windows",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"c"
            }
        ],
        "go":[
            {
                "id":1,
                "title":"Learning Golang in 24 Hours",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"go"
            },
            {
                "id":2,
                "title":"Why Golang is a must for your developer toolkit?",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"go"
            },
            {
                "id":3,
                "title":"Why Golang is the future?",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"go"
            },
            {
                "id":4,
                "title":"How Fast Is Golang?",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"go"
            }
        ],
        "python":[
            {
                "id":1,
                "title":"Basic Data Types in Python 3: Booleans",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"python"
            },
            {
                "id":2,
                "title":"Quickly Use Bootstrap 4 in a Django Template with a CDN",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"python"
            },
            {
                "id":3,
                "title":"Learning pandas by Exploring COVID-19 Data",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"python"
            },
            {
                "id":4,
                "title":"Reporting Exceptions in Python Scripts with Sentry",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"python"
            }
        ],
        "web":[
            {
                "id":1,
                "title":"Uploading Avatars and Screenshots is better, too.",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"web" 
            },
            {
                "id":2,
                "title":"Edit & Optimize Image Assets",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"web" 
            },
            {
                "id":3,
                "title":"Dynamically Generated CDN Content",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"web" 
            },
            {
                "id":4,
                "title":"Flutter on CodePen",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"web" 
            }
        ],
        "gp":[
            {
                "id":1,
                "title":"Is High Quality Software Worth the Cost?",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"GP" 
            },
            {
                "id":2,
                "title":"Object-Oriented UX",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"Arjun",
                "category":"GP" 
            },
            {
                "id":3,
                "title":"The Wrong Abstraction",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"shreyas",
                "category":"GP" 
            },
            {
                "id":4,
                "title":"The Solution to Technical Debt",
                "content":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                "author":"Arjun",
                "category":"GP" 
            }
        ]
    }
    localStorage.setItem('postObject',JSON.stringify(data))

    // let user = JSON.parse(localStorage.getItem('loggedUser'))
    
    // if(user){
    //     let nav1 = document.getElementById('navbarSupportedContent1')
    // }

    // else{
    //     let temp = document.getElementById('navbarSupportedContent')
    //     temp.innerHTML = ""
    //     g
    // }
    
    let python = document.getElementById('pythonLink')
    let c = document.getElementById('cLink')
    let js = document.getElementById('jsLink')
    let go = document.getElementById('goLink')
    let web = document.getElementById('webLink')
    let gp = document.getElementById('gpLink')

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

    web.addEventListener('click',() =>{
        localStorage.setItem('currentPage',JSON.stringify("web"))
    })

    gp.addEventListener('click',() =>{
        localStorage.setItem('currentPage',JSON.stringify("gp"))
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
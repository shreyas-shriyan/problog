const start = () =>{
    let user = (localStorage.getItem('loggedUser'))
    if(user){
        let navbar = document.getElementById('navbarSupportedContent')
        let items = navbar.getElementsByTagName('a')
        for(let i=0; i<items.length; i++){
            items[i].style.display = "none"
        }
        document.getElementById('createPostbtn').style.display="block"
        let name = document.getElementById('username')
        name.textContent = user.toUpperCase()
    }
    let language = JSON.parse(localStorage.getItem('currentPage'))
    addMainImage(language)
    searchPost(language)
}

//eventListener for showing post on postPage.html
const row = document.getElementById('row')
row.addEventListener('click',(e)=>{
    e.preventDefault()
    let ele = e.srcElement 
    if(ele.id){
        localStorage.setItem('currentID',JSON.stringify(ele.id))
        location="postPage.html"
    } 
})

//function for showing the image of the choosen language
const addMainImage = (value) =>{
    console.log(value)
    let temp = document.getElementById('langPic')
    let tempImg = document.createElement('img')
    tempImg.setAttribute('src',`images/${value}Pic.png`)
    temp.append(tempImg)
}


//function for seraching the post related to the language
const searchPost=(language)=>{
    let temp = JSON.parse(localStorage.getItem('postObject'))
    temp[language].forEach((item)=>{
        createCards(item['title'],sliceContent(item['content']),item['author'],item['id'])
    })
}

//function for slice
const sliceContent = (str) =>{
    return str.substring(0,80)
}

//function for creating a card for a particular post on the posts.html page
const createCards = (title,content,author,id)=>{
    let row = document.getElementById('row')
    let col = document.createElement('div')
    col.setAttribute('class','col-6')
    let card = document.createElement('div')
    card.setAttribute('class','card mt-3 bg-dark text-light')
    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')
    let heading = document.createElement('h4')
    let link = document.createElement('a')
    // link.setAttribute('href','postPage.html')
    link.setAttribute('class','stretched-link text-light')
    link.setAttribute('id',id)
    link.textContent = title
    heading.append(link)
    let subHead = document.createElement('p')
    subHead.textContent = content
    let postAuthor = document.createElement('h6')
    postAuthor.textContent = author
    cardBody.append(heading, subHead, postAuthor)
    card.append(cardBody)
    col.append(card)
    row.append(col)
}

window.addEventListener('load',start)
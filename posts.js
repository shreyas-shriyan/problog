start = () =>{
    let language = JSON.parse(localStorage.getItem('currentPage'))
    addMainImage(language)
    searchPost(language)
}

//function for showing the image of the choosen language
const addMainImage = (value) =>{
    let temp = document.getElementById('langPic')
    let tempImg = document.createElement('img')
    tempImg.setAttribute('src',`images/${value}Pic.png`)
    temp.append(tempImg)
}


//function for seraching the post related to the language
const searchPost=(language)=>{
    let temp = JSON.parse(localStorage.getItem('postObject'))
    temp[language].forEach((item)=>{
        createCards(item['title'],sliceContent(item['content']),item['author'])
    })
}

//function for slice
const sliceContent = (str) =>{
    return str.substring(0,80)
}

//function for creating a card for a particular post on the posts.html page
const createCards = (title,content,author)=>{
    let row = document.getElementById('row')
    let col = document.createElement('div')
    col.setAttribute('class','col-6')
    let card = document.createElement('div')
    card.setAttribute('class','card mt-3')
    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')
    let heading = document.createElement('h4')
    let link = document.createElement('a')
    link.setAttribute('href','postPage.html')
    link.setAttribute('class','stretched-link')
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
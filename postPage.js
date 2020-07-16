const displayContent = () =>{
    let id = JSON.parse(localStorage.getItem('currentID'))
    let lang = JSON.parse(localStorage.getItem('currentPage'))
    let data = JSON.parse(localStorage.getItem('postObject'))
    renderDom(id, lang, data)
    recommendedPosts(id, lang, data)
}

const renderDom =(id,lang,data)=>{
    let heading = document.getElementById('heading')
    let author = document.getElementById('author')
    let content = document.getElementById('content')

    let elem = data[lang][id-1]
    heading.textContent = elem.title
    author.textContent = elem.author
    content.textContent = elem.content
}

// const createCard = ()=>{
//     let card = document.createElement('div')
//     card.setAttribute('class','card')
//     let cardBody = document.createElement('div')
//     cardBody.setAttribute('class','card-body')
//     card.append(cardBody)
//     return card
// }

// const recommendedPosts = (id,lang,data)=>{
//     let col = document.createElement('div')
//     col.setAttribute('class','col-6')
//     let card = createCard()
//     let heading = document.createElement('h4')
//     let link = document.createElement('a')
//     link.setAttribute('href','postPage.html')
//     link.setAttribute('class','stretched-link text-light')
//     link.setAttribute('id',id)
//     link.textContent = title
//     heading.append(link)
//     let subHead = document.createElement('p')
//     subHead.textContent = content
//     let postAuthor = document.createElement('h6')
//     postAuthor.textContent = author
//     cardBody.append(heading, subHead, postAuthor)
//     card.append(cardBody)
//     col.append(card)
//     row.append(col)
// }

window.addEventListener('load',displayContent)
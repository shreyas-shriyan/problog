let form = document.querySelector('form')
let body = document.querySelector('body')

class Post{
    constructor(id,title,content,category,author){
        this.id = id
        this.title = title
        this.content = content
        this.author = author
        this.category = category
    }

    createPostObject = () =>{
        return{
            id : this.id,
            title : this.title,
            content : this.content,
            author : this.author,
            category : this.category
        }
    }

}

submitPost = () => {
    event.preventDefault()
    let language = document.getElementById('postCategory')
    let postTitle = document.getElementById('postTitle')
    let postContent = document.getElementById('postContent')

    let postObjectParsed = JSON.parse(localStorage.getItem('postObject'))
    let id = postObjectParsed[`${language.value}`].length + 1
    
    let temp = new Post(id,postTitle.value,postContent.value,language.value,'admin')
    postObjectParsed[`${language.value}`].push(temp.createPostObject())
    localStorage.setItem('postObject',JSON.stringify(postObjectParsed))

    alert('✓ post submitted')
    
    postTitle.value = ""
    postContent.value = ""
}



form.addEventListener('submit',submitPost)



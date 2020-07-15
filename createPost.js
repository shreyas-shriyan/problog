
let posts = []

class Post{
    constructor(id,title,category,content,author){
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

    appendPost = () =>{
        posts.push(create_post_object)
    }
}

let form = document.getElementBy

form.addEventListener('submit',submitPost)

let temp = new Post(id,title,content,author,category)



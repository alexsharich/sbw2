import {db} from "../../../db/db";


type ForUpdatePostBody = {
    title: string,
    shortDescription: string,
    content: string,
    blogId: string
}
type ForCreatePostBody = {
    title: string,
    shortDescription: string,
    content: string,
    blogId: string
}
export const postsRepository = {
    createPost({blogId, content, shortDescription, title}: ForCreatePostBody) {
        const posts = db.posts
        const newPost = {
            id: new Date().getDate(),
            title: title,
            shortDescription: shortDescription,
            content: content,
            blogId: "string",///???
            blogName: "string"///???
        }
        posts.push(newPost)
        return true
    },
    getPosts() {
        const posts = db.posts
        return posts
    },
    deletePost(id: string) {
        const posts = db.posts
        const index = posts.findIndex(post => post.id === Number(id))
        if (index !== -1) {
            posts.splice(index, 1)
            return true
        } else {
            return false
        }
    },
    updatePost(id: string, {title, shortDescription, blogId, content}: ForUpdatePostBody) {
        const posts = db.posts
        const postForUpdate = posts.find(post => post.id === id)
        if (!postForUpdate) {
            return false
        }
        postForUpdate.title = title
        postForUpdate.shortDescription = shortDescription
        postForUpdate.content = content
        postForUpdate.blogId = blogId
        return true
    },
    findPost(id: string) {
        const posts = db.posts
        const post = posts.find(post => post.id === id)
        if (!post) {
            return false
        }
        return posts.filter(post => post.id === id) ///or !id ???
    }

}
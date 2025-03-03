import {db} from "../../../db/db";
import {InputPostType, OutputPostType} from "../../../input-output-types/post-types";
import {PostDbType} from "../../../db/post-db-type";
import {blogsRepository} from "../../blogs/repositories/blogsRepository";

export const postsRepository = {
    create(post: InputPostType) {
        const newPost: PostDbType = {
            id: new Date().toISOString() + Math.random(),
            title: post.title,
            content: post.content,
            shortDescription: post.shortDescription,
            blogId: post.blogId,
            blogName: blogsRepository.find(post.blogId)!.name,
        }
        db.posts = [...db.posts, newPost]
        return newPost.id
    },
    getAll() {
        return db.posts.map(p => this.map(p))
    },
    delete(id: string) {
        const posts = db.posts
        const index = posts.findIndex(post => post.id === Number(id))
        if (index !== -1) {
            posts.splice(index, 1)
            return true
        } else {
            return false
        }
    },
    update(id: string, {title, shortDescription, blogId, content}: InputPostType) {
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
    find(id: string) {
        const posts = db.posts
        const post = posts.find(post => post.id === id)
        if (!post) {
            return false
        }
        return posts.filter(post => post.id === id) ///or !id ???
    },
    map(post: PostDbType) {
        const postForOutput: OutputPostType = {
            id: post.id,
            title: post.title,
            shortDescription: post.shortDescription,
            content: post.content,
            blogId: post.blogId,
            blogName: post.blogName,
        }
        return postForOutput
    },

}
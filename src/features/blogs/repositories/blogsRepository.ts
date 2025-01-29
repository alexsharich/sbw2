import {db} from "../../../db/db";


type ForCreateBlogBody = {
    name: string
    description: string
    websiteUrl: string
}
type ForUpdateBlogBody = {
    name: string
    description: string
    websiteUrl: string
}
export const blogsRepository = {
    createBlog({description, name, websiteUrl}: ForCreateBlogBody) {
        const blogs = db.blogs
        const newBlog: any = {
            id: new Date().getDate(),
            name: name,
            description: description,
            websiteUrl: websiteUrl,
            isMembership: false,
            createdAt: (new Date().toISOString())
        }
        blogs.push(newBlog)
        return newBlog.id
    },
    deleteBlog(id: string) {
        const blogs = db.blogs
        const index = blogs.findIndex(blog => blog.id === id)
        if (index !== 1) {
            blogs.splice(index, 1)
            return true
        } else {
            return false
        }
    },
    findBlog(id: string) {
        const blogs = db.blogs
        const blog = blogs.find(blog => blog.id === id)
        if (!blog) {
            return false
        }
        return blogs.filter(blog => blog.id === id)

    },
    updateBlog(id: string, {description, name, websiteUrl}: ForUpdateBlogBody) {
        const blogs = db.blogs
        const blogForUpdate = blogs.find(blog => blog.id === id)
        if (!blogForUpdate) {
            return false
        }
        blogForUpdate.name = name
        blogForUpdate.description = description
        blogForUpdate.websiteUrl = websiteUrl
        return true

    },
    getBlogs() {
        const blogs = db.blogs
        return blogs
    }
}
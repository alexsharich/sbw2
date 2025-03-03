import {db} from "../../../db/db";
import {BlogDbType} from "../../../db/blog-db-type";
import {InputBlogType, OutputBlogType} from "../../../input-output-types/blog-types";
import {InputPostType} from "../../../input-output-types/post-types";


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
    create({description, name, websiteUrl}: ForCreateBlogBody) {
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
    delete(id: string) {
        const blogs = db.blogs
        const index = blogs.findIndex(blog => blog.id === id)
        if (index !== 1) {
            blogs.splice(index, 1)
            return true
        } else {
            return false
        }
    },
    find(id: string) {
        return db.blogs.find(b => b.id === id)
    },
    update(id: string, {description, name, websiteUrl}: ForUpdateBlogBody) {
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
    getAll() {
        return db.blogs.map(b => this.map(b))
    },
    map(blog: BlogDbType) {
        const blogForOutput: OutputBlogType = {
            id: blog.id,
            description: blog.description,
            websiteUrl: blog.websiteUrl,
            name: blog.name,
        }
        return blogForOutput
    },
}
import {blogsRepository} from "../repositories/blogsRepository";

export const blogsController = {
    createBlog(req: any, res: any) {
        const newBlogId = blogsRepository.createBlog(req.body)
        const createdBlog = blogsRepository.findBlog(newBlogId)
        res.status(201).json(createdBlog)

    },
    deleteBlog(req: any, res: any) {
        const isDeletedBlog = blogsRepository.deleteBlog(req.params)
        if (!isDeletedBlog) {
            res.sendStatus(404)
            return
        }
        res.sendStatus(201)
    },
    getBlogById(req: any, res: any) {
        const foundedBlog = blogsRepository.findBlog(req.params)
        if (!foundedBlog) {
            res.sendStatus(404)
            return
        }
        res.status(200).send(foundedBlog)
    },
    getBlogs(req: any, res: any) {
        const blogs = blogsRepository.getBlogs(req.params)
        if (!blogs) {
            res.sendStatus(404)
            return
        }
        res.sendStatus(200).send(blogs)
    },
    updateBlog(req: any, res: any) {
        const isUpdatedBlog = blogsRepository.updateBlog(req.params, req.body)
        if (!isUpdatedBlog) {
            res.sendStatus(404)
            return
        }
        const updatedBlog = blogsRepository.findBlog(req.params.id)
        res.status(204).send(updatedBlog)
    }
}
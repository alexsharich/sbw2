import {blogsRepository} from "../repositories/blogsRepository";
import {Request, Response} from "express";
import {InputBlogType} from "../../../input-output-types/blog-types";

export const blogsController = {
    createBlog(req: Request<{}, {}, InputBlogType>, res: Response) {
        const newBlogId = blogsRepository.create(req.body)
        const createdBlog = blogsRepository.find(newBlogId)
        res.status(201).json(createdBlog)

    },
    deleteBlog(req: Request<{ id: string }>, res: Response) {
        const isDeletedBlog = blogsRepository.delete(req.params.id)
        if (!isDeletedBlog) {
            res.sendStatus(404)
            return
        }
        res.sendStatus(204)
    },
    getBlogById(req: Request<{ id: string }>, res: Response) {
        const foundedBlog = blogsRepository.find(req.params.id)
        if (!foundedBlog) {
            res.sendStatus(404)
            return
        }
        res.status(200).send(foundedBlog)
    },
    getBlogs(req: Request, res: Response) {
        const blogs = blogsRepository.getAll()
        if (!blogs) {
            res.sendStatus(404)
            return
        }
        res.sendStatus(200).send(blogs)
    },
    updateBlog(req: Request<{ id: string }, {}, InputBlogType>, res: Response) {
        const isUpdatedBlog = blogsRepository.update(req.params.id, req.body)
        if (!isUpdatedBlog) {
            res.sendStatus(404)
            return
        }
        const updatedBlog = blogsRepository.find(req.params.id)
        res.status(204).send(updatedBlog)
    }
}
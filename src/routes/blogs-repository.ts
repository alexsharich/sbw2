import {Router} from "express";
import {blogsController} from "../features/blogs/controllers/blogsController";

export const blogsRouter = Router()
blogsRouter.get('/', blogsController.getBlogs)
blogsRouter.post('/', blogsController.createBlog)
blogsRouter.get('/:id', blogsController.getBlogById)
blogsRouter.put('/:id', blogsController.updateBlog)
blogsRouter.delete('/:id', blogsController.deleteBlog)
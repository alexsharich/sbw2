import {Router} from "express";
import {blogsController} from "../features/blogs/controllers/blogsController";
import {blogValidators, findBlogValidator} from "../features/blogs/middlewares/blogValidators";
import {adminMiddleware} from "../global-middleware/admin-middleware";

export const blogsRouter = Router()
blogsRouter.get('/', blogsController.getBlogs)
blogsRouter.post('/', ...blogValidators, blogsController.createBlog)
blogsRouter.get('/:id', findBlogValidator, blogsController.getBlogById)
blogsRouter.put('/:id', findBlogValidator, ...blogValidators, blogsController.updateBlog)
blogsRouter.delete('/:id', adminMiddleware, findBlogValidator, blogsController.deleteBlog)
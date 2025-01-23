import {Router} from "express";
import {getBlogsController} from "../blogs/getBlogsController";
import {createBlogController} from "../blogs/createBlogController";
import {getBlogsByIdController} from "../blogs/getBlogsByIdController";
import {updateBlogController} from "../blogs/updateBlogController";
import {deleteBlogController} from "../blogs/deleteBlogController";

export const blogsRouter = Router()
blogsRouter.get('/', getBlogsController)
blogsRouter.post('/', createBlogController)
blogsRouter.get('/:id', getBlogsByIdController)
blogsRouter.put('/:id', updateBlogController)
blogsRouter.delete('/:id', deleteBlogController)
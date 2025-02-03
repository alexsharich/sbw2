import {postsController} from "../features/posts/controllers/postsController";
import {Router} from "express";

export const postsRouter = Router()
postsRouter.get('/', postsController.getPosts)
postsRouter.post('/', postsController.createPost)
postsRouter.get('/:id', postsController.getPostById)
postsRouter.put('/:id', postsController.updatePost)
postsRouter.delete('/:id', postsController.deletePost)

import {postsController} from "../features/posts/controllers/postsController";
import {Router} from "express";
import {findPostValidator, postValidators} from "../features/posts/middlewares/postsValidators";
import {adminMiddleware} from "../global-middleware/admin-middleware";

export const postsRouter = Router()
postsRouter.get('/', postsController.getPosts)
postsRouter.post('/', ...postValidators, postsController.createPost)
postsRouter.get('/:id', findPostValidator, postsController.getPostById)
postsRouter.put('/:id', adminMiddleware, ...postValidators, postsController.updatePost)
postsRouter.delete('/:id', adminMiddleware, postsController.deletePost)

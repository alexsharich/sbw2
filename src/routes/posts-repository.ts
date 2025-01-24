import {Router} from "express";
import {getPostsController} from "../posts/getPostsController";
import {createPostController} from "../posts/createPostController";
import {getPostByIdController} from "../posts/getPostByIdController";
import {updatePostControlller} from "../posts/updatePostControlller";
import {deletePostController} from "../posts/deletePostController";

export const postsRouter = Router()
postsRouter.get('/', getPostsController)
postsRouter.post('/', createPostController)
postsRouter.get('/:id', getPostByIdController)
postsRouter.put('/:id', updatePostControlller)
postsRouter.delete('/:id', deletePostController)

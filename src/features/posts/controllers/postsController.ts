import {postsRepository} from "../repositories/postsRepository";
import {Request, Response} from "express";
import {InputPostType} from "../../../input-output-types/post-types";

export const postsController = {
    createPost(req: Request<{}, {}, InputPostType>, res: Response) {
        const newPostCreated = postsRepository.create(req.body)
        if (newPostCreated === null) {
            res.sendStatus(400)
            return
        }
        const newPost = postsRepository.find(newPostCreated.toString())
        if (!newPost) {
            res.sendStatus(400)
            return
        }
        res.status(201).send(newPost)
    },
    deletePost(req: Request<{ id: string }>, res: Response) {
        const isDeletedPost = postsRepository.delete(req.params.id)
        if (!isDeletedPost) {
            res.sendStatus(404)
            return
        }
        res.sendStatus(204)
    },
    getPostById(req: Request<{ id: string }>, res: Response) {
        const foundedPost = postsRepository.find(req.params.id)
        if (!foundedPost) {
            res.sendStatus(404)
            return
        }
        res.status(200).send(foundedPost)
    },
    getPosts(req: Request, res: Response) {
        const posts = postsRepository.getAll()
        res.status(200).send(posts)
    },
    updatePost(req: Request<{ id: string }, {}, InputPostType>, res: any) {
        const isPostUpdated = postsRepository.update( req.params.id,req.body,)
        if (!isPostUpdated) {
            res.sendStatus(404)
            return
        }
        res.sendStatus(204)
    }
}
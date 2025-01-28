import {postsRepository} from "../repositories/postsRepository";

export const postsController = {
    createPost(req: any, res: any) {
        const newPostCreated = postsRepository.createPost(req.body)
        if (newPostCreated === null) {
            res.sendStatus(400)
            return
        }
        const newPost = postsRepository.findPost(newPostCreated.toString())
        if (!newPost) {
            res.sendStatus(400)
            return
        }
        res.status(201).send(newPost)
    },
    deletePost(req: any, res: any) {
        const isDeletedPost = postsRepository.deletePost(req.params.id)
        if (!isDeletedPost) {
            res.sendStatus(404)
            return
        }
        res.sendStatus(204)
    },
    getPostById(req: any, res: any) {
        const foundedPost = postsRepository.findPost(req.params.id)
        if (!foundedPost) {
            res.sendStatus(404)
            return
        }
        res.status(200).send(foundedPost)
    },
    getPosts(req: any, res: any) {
        const posts = postsRepository.getPosts()
        res.status(200).send(posts)
    },
    updatePost(req: any, res: any) {
        const isPostUpdated = postsRepository.updatePost(req.params, req.body)
        if (!isPostUpdated) {
            res.sendStatus(404)
            return
        }
        res.sendStatus(204)
    }
}
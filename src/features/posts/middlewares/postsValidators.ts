import {body} from "express-validator";
import {NextFunction, Request, Response} from "express";
import {postsRepository} from "../repositories/postsRepository";
import {adminMiddleware} from "../../../global-middleware/admin-middleware";
import {inputCheckErrorsMiddleware} from "../../../global-middleware/inputCheckErrorMiddleware";
import {blogsRepository} from "../../blogs/repositories/blogsRepository";

export const titleValidator = body('title').isString().withMessage('not string').trim().isLength({
    min: 1,
    max: 30
}).withMessage('more then 30 or 0')
export const shortDescription = body('shortDescription').isString().withMessage('not string').trim().isLength({
    min: 1,
    max: 100
}).withMessage('more then 100 or 0')

export const contentValidator = body('content').isString().withMessage('not string').trim().isLength({
    min: 1,
    max: 1000
}).withMessage('more then 1000 or 0')

export const findPostValidator = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const post = await postsRepository.findPost(req.params.id)
    if (!post) {
        res.status(404).json({})
        return
    }
    next()
}

export const blogIdValidator = body('blogId').isString().withMessage('not string').trim().custom(async (blogId: string) => {
    const blog = await blogsRepository.findBlog(blogId)
    if (!blog) {
        throw new Error('blog not found')
        return true
    }
}).withMessage('no blog')
export const postValidators = [
    adminMiddleware,

    titleValidator,
    shortDescription,
    contentValidator,
    blogIdValidator,

    inputCheckErrorsMiddleware
]
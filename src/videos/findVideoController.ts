import {Request, Response} from 'express'
import {videosRepository} from "./videos-repository/videosRepository";

export const findVideoController = (req: Request, res: Response<any>) => {

    const foundedVideovideo = videosRepository.findVideo(req.params.id ? req.params.id : '')

    if (foundedVideovideo === false) {
        res.sendStatus(404)
        return
    }
    res.status(200).json(foundedVideovideo)
}
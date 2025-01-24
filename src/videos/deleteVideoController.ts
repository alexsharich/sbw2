import {Request, Response} from 'express'
import {videosRepository} from "../videos-repository/videosRepository";

export const deleteVideoController = (req: Request, res: Response<any>) => {

    const isDeleted = videosRepository.deleteVideo(req.params.id)

    if (!isDeleted) {
        res.sendStatus(404)
        return
    } else {
        res.sendStatus(204)
    }
}
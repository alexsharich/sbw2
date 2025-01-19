import {Request, Response} from 'express'
import {db} from '../db/db'

export const deleteVideoController = (req: Request, res: Response<any>) => {
    const videos = db.videos
    const index = videos.findIndex(video => video.id === Number(req.params.id))

    if (index !== -1) {
        videos.splice(index, 1)
        res.sendStatus(204)
        return
    } else {
        res.sendStatus(404)
    }
}
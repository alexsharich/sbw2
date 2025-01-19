import {Request, Response} from 'express'
import {db} from '../db/db'

export const findVideoController = (req: Request, res: Response<any>) => {
    const videos = db.videos
    const video = videos.find(video => video.id === req.params.id)
    if (!video) {
        res.status(404)
        return
    }
    videos.filter(video => video.id !== req.params.id)
    res.status(200).json(videos)
}
import {Request, Response} from 'express'
import {db} from '../db/db'

export const updateVideoController = (req: Request, res: Response<any>) => {
    const videos = db.videos
    const video = videos.find(video => video.id === Number(req.params.id))
    if (!video) {

        res.sendStatus(404)
        return
    }
    video.title = req.body.title
    video.athor = req.body.author
    video.availableResolutions = req.body.availableResolutions
    video.canBeDownloaded = req.body.canBeDownloaded
    video.minAgeRestriction = req.body.minAgeRestriction
    video.publicationDate = req.body.minAgeRestriction
    res.sendStatus(204)
}


import {Request, Response} from 'express'
import {db} from '../db/db'

export const createVideoController = (req: Request, res: Response<any>) => {
    const videos = db.videos

    if (req.body.title === '') {
        res.status(400).json({
            errorsMessages: [
                {
                    message: "string",
                    field: "string"
                }
            ]
        })
    }


    const newVideo = {
        id: new Date().getTime() + 1000,
        title: req.body.title,
        author: req.body.author,
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: new Date().getDate(),
        publicationDate: new Date().getDate(),
        availableResolutions: req.body.availableResolutions
    }
     videos.push(newVideo)
    res.status(201).json(newVideo)
}
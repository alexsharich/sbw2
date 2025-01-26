import {Request, Response} from 'express'
import {videosRepository} from "./videos-repository/videosRepository";

export const createVideoController = (req: Request, res: Response<any>) => {

    const newVideo: any = {
        id: new Date().getTime() + 1000,
        title: req.body.title,
        author: req.body.author,
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: new Date().getDate(),
        publicationDate: new Date().getDate(),
        availableResolutions: req.body.availableResolutions
    }

    const isCreatedVideo = videosRepository.createVideo(newVideo)

    if (!isCreatedVideo) {
        res.status(400).json({
            errorsMessages: [
                {
                    message: "string",
                    field: "string"
                }
            ]
        })
        return
    }
    res.status(201).json(newVideo)
}
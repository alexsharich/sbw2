import {Request, Response} from 'express'
import {videosRepository} from "../videos-repository/videosRepository";
import {Resolutions} from "../input-output-types/video-types";

export type videoType = {
    title: string,
    author: string,
    availableResolutions: [
        Resolutions
    ],
    canBeDownloaded: boolean,
    minAgeRestriction: number,
    publicationDate: Date
}
export const updateVideoController = (req: Request, res: Response<any>) => {

    const isUpdatedVideo = videosRepository.updateVideo(req.params.id, req.body)

    if (!isUpdatedVideo) {
        res.sendStatus(404)
        return
    }
    res.sendStatus(204)
}


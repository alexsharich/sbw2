import {Request, Response} from 'express'
import {videosRepository} from "../videos-repository/videosRepository";

export const getVideosController = (req: Request, res: Response<any>) => {

    const videos = videosRepository.getVideos()
    res
        .status(200)
        .json(videos)
}
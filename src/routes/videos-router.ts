import {Router} from 'express'
import {getVideosController} from "../videos/getVideoController";
import {findVideoController} from "../videos/findVideoController";
import {deleteVideoController} from "../videos/deleteVideoController";
import {updateVideoController} from "../videos/updateVideoController";
import {createVideoController} from "../videos/createVideoController";


export const videosRouter = Router()

videosRouter.get('/', getVideosController)
videosRouter.post('/', createVideoController)
videosRouter.get('/:id', findVideoController)
videosRouter.put('/:id',updateVideoController)
videosRouter.delete('/:id', deleteVideoController)

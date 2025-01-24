import {db} from "../db/db";
import {videoType} from "../videos/updateVideoController";

export const videosRepository = {
    getVideos() {
        const videos = db.videos
        return videos
    },
    createVideo(newVideo: any) {
        const videos = db.videos
        if (newVideo.title === '') {
            return false
        } else {
            videos.push(newVideo)
            return true
        }
    },
    findVideo(id: string) {
        const videos = db.videos
        const video = videos.find(video => video.id === id)
        if (!video) {
            return false
        }
        return videos.filter(video => video.id !== id)
    },
    updateVideo(id: string, video: videoType) {
        const videos = db.videos
        const videoForUpdate = videos.find(video => video.id === Number(id))
        if (!videoForUpdate) {
            return false
        }
        videoForUpdate.title = video.title
        videoForUpdate.athor = video.author
        videoForUpdate.availableResolutions = video.availableResolutions
        videoForUpdate.canBeDownloaded = video.canBeDownloaded
        videoForUpdate.minAgeRestriction = video.minAgeRestriction
        videoForUpdate.publicationDate = video.minAgeRestriction
        return true
    },
    deleteVideo(id: string) {
        const videos = db.videos
        const index = videos.findIndex(video => video.id === Number(id))

        if (index !== -1) {
            videos.splice(index, 1)
            return true
        } else {
            return false
        }
    }
}
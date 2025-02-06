import express from 'express'
import cors from 'cors'
import {SETTINGS} from './settings'
import bodyParser from 'body-parser'
import {videosRouter} from "./routes/videos-router";
import {testingRouter} from "./features/testing/testing";
import {blogsRouter} from "./routes/blogs-router";
import {postsRouter} from "./routes/posts-router";

export const app = express()
app.use(bodyParser())
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({version: '1.0'})
})
app.use(SETTINGS.PATH.TESTING, testingRouter)
app.use(SETTINGS.PATH.VIDEOS, videosRouter)
app.use(SETTINGS.PATH.BLOGS, blogsRouter)
app.use(SETTINGS.PATH.POSTS, postsRouter)

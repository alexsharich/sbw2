import express from 'express'
import cors from 'cors'
import {SETTINGS} from './settings'
import {videosRouter} from './videos'
import bodyParser from 'body-parser'

export const app = express()
app.use(bodyParser())
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({version: '1.0'})
})
app.use(SETTINGS.PATH.VIDEOS, videosRouter)
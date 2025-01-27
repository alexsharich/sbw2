import {config} from 'dotenv'

config()

export const SETTINGS = {
    PORT: process.env.PORT || 3000,
    PATH: {
        VIDEOS: '/videos',
        BLOGS: '/blogs',
        POSTS: '/posts',
        TESTING: '/testing'
    },
    ADMIN_AUTH : 'admin:qwerty'
}
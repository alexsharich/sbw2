import {req} from './test-helpers'
import {setDB} from '../src/db/db'
import {dataset1} from './datasets'
import {SETTINGS} from '../src/settings'

describe.skip('/videos', () => {
    beforeAll(async () => {
        setDB()
    })

    it('should get empty array', async () => {
        setDB()

        const res = await req
            .get(SETTINGS.PATH.VIDEOS)
            .expect(200)

        console.log('1',res.body)

         expect(res.body.length).toBe(0)
    })
    it('should get not empty array', async () => {
         setDB(dataset1)

        const res = await req
            .get(SETTINGS.PATH.VIDEOS)
            .expect(200)

        console.log('2',res.body)

         expect(res.body.length).toBe(1)
         expect(res.body[0]).toEqual(dataset1.videos[0])
    })
    it('should create', async () => {
        setDB()
        const newVideo: any = {
            title: 't1',
            author: 'a1',
            availableResolutions: ["P240"]
        }

        const res = await req
            .post(SETTINGS.PATH.VIDEOS)
            .send(newVideo)
            .expect(201)

        console.log('3',res.body)

        expect(res.body.availableResolutions).toEqual(newVideo.availableResolutions)
    })

    it('shouldn\'t find', async () => {
        setDB(dataset1)

        const res = await req
            .get(SETTINGS.PATH.VIDEOS + '/1')
            .expect(404)

        console.log(res.body)
    })
})
import {SETTINGS} from "../src/settings";
import {agent} from 'supertest'
import {app} from "../src/app";

export const req = agent(app)

console.log(process.env.NODE_ENV)
describe('/post', () => {
    it('should get empty array', async () => {
        const buff2 = Buffer.from(SETTINGS.ADMIN_AUTH, 'utf8')
        const codedAuth = buff2.toString('base64')
        const res = await req
            .get(SETTINGS.PATH.POSTS)
            .set({'Authorisation': 'Basic ' + codedAuth})
            .expect(200)
    })
})
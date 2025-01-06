import express ,{Request,Response} from 'express'
const app = express()
const port = 3000

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello backend !')
})

app.listen(port,()=>{
    console.log(`App was started on port ${port} !`)
})
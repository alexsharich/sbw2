import {app} from './app'
import {SETTINGS} from './settings'



const startApp = async ()=>{
    await runDb()
    app.listen(SETTINGS.PORT, () => {
        console.log('...server started in port ' + SETTINGS.PORT)
    })
}

startApp()
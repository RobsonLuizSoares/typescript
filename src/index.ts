
import  Express from 'express'

const app = Express()

app.get('/', (req:Express.Request,res:Express.Response) =>{
    res.send("Teste")
})

app.listen(8080, (err?:()=>void) => {
    console.log('running new version')
})


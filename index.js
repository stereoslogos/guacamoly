import express from 'express'
import { clienteRouter } from './routes/clienteRouter.js'
import { productoRouter } from './routes/productoRouter.js'
import { dataBase } from './config/dataBase.js'

const app = express()
app.use(express.urlencoded({extended:true}))
const puerto = 3000

try {
    await dataBase.authenticate()
    dataBase.sync()
    console.log('Database connection established successfully')
} catch (error) {
    console.log(error)
}

app.use('/auth', clienteRouter)
app.use('/auth', productoRouter)
app.set('view engine', 'pug')
app.set('views', './views')

app.listen(puerto, ()=>{
    console.log(`Server running on port ${puerto}`)
})
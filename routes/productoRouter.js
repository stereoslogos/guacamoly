import express from 'express'
import { formularioRegistroP, crearProducto} from '../controllers/productoController.js'

const productoRouter = express.Router()


productoRouter.get('/registroproductos', formularioRegistroP)
productoRouter.post('/registroproductos', crearProducto)

export {
  productoRouter
}
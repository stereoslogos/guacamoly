import express from 'express'
import { formularioRegistro, crearCliente} from '../controllers/clienteController.js'

const clienteRouter = express.Router()


clienteRouter.get('/registroclientes', formularioRegistro)
clienteRouter.post('/registroclientes', crearCliente)
// clienteRouter.get('/recuperar', formularioRecuperar)
// clienteRouter.get('/confirmarUsuario/:token', activarUsuario)

export {
  clienteRouter
}
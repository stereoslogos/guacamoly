import { Cliente } from '../models/ClienteModel.js';
import { check, validationResult } from "express-validator";
import nodemailer from 'nodemailer';

const generarId = () =>
  Math.random().toString(32).substring(2) + Date.now().toString(32);

const formularioRegistro = (req, res) => {
    res.render("auth/registroclientes", {
      nombreVista: "Nuevo Cliente",
    });
  };
  
const crearCliente = async (req, res) => {
    await check("nombre")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .run(req);
    await check("apellido")
        .notEmpty()
        .withMessage("El apellido es obligatorio")
        .run(req);
    await check("documento")
        .notEmpty()
        .withMessage("El documento debe tener minimo 5 caracteres")
        .run(req);
    await check("correo")
        .isEmail()
        .withMessage("El correo debe llevar un formato valido")
        .run(req);
    await check("direccion")
        .notEmpty()
        .withMessage("La direccion es obligatorio")
        .run(req);
    await check("telefono")
        .notEmpty()
        .withMessage("El telefono es obligatorio")
        .run(req);

    const { nombre, correo, apellido, documento, direccion, telefono } = req.body;

    
    const validarUsuario = await Cliente.findOne({ where: { correo } });

    if (validarUsuario) {
        return res.render("auth/registroclientes", {
        nombreVista: "Nuevo Usuario",
        errores: [{ msg: "El correo ya existe en la base de datos" }],
        usuario: {
            nombre: req.body.nombre,
            correo: req.body.correo,
        },
        });
    }

    const usuario = await Cliente.create({
        nombre,
        apellido,
        documento,
        correo,
        direccion,
        telefono,
        token: generarId(),
    });
};

export {
    formularioRegistro,
    crearCliente
};
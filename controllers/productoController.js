import { Producto } from '../models/ProductoModel.js';
import { check, validationResult } from "express-validator";
import nodemailer from 'nodemailer';

const generarIdP = () =>
  Math.random().toString(32).substring(2) + Date.now().toString(32);

const formularioRegistroP = (req, res) => {
    res.render("auth/registroproductos", {
      nombreVista: "Nuevo Producto",
    });
  };
  
const crearProducto = async (req, res) => {
    await check("nombreP")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .run(req);
    await check("precio")
        .notEmpty()
        .withMessage("El precio es obligatorio")
        .run(req);
    await check("referencia")
        .notEmpty()
        .withMessage("La referencia es obligatoria")
        .run(req);
    await check("cantidad")
        .notEmpty()
        .withMessage("La cantidad es obligatoria")
        .run(req);
    await check("descripcion")
        .notEmpty()
        .withMessage("La descripcion es obligatoria")
        .run(req);

    const { nombreP, precio, referencia, cantidad, descripcion } = req.body;

    const producto = await Producto.create({
        nombreP,
        precio,
        referencia,
        cantidad,
        descripcion,
        token: generarIdP(),
    });
};

export {
    formularioRegistroP,
    crearProducto
};
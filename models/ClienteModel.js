import { DataTypes } from "sequelize";
import bcrypt from 'bcrypt'
import { dataBase } from "../config/dataBase.js";

const Cliente = dataBase.define('cliente', {
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    documento:{
        type: DataTypes.STRING,
        allowNull: false
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
}, {
    hooks:{
        beforeCreate: async function(cliente){
            const salt = await bcrypt.genSalt(10)
            cliente.documento = await bcrypt.hash(cliente.documento, salt)
        }
    }
})

export{Cliente}
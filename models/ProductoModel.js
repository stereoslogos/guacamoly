import { DataTypes } from "sequelize";
import { dataBase } from "../config/dataBase.js";

const Producto = dataBase.define('producto', {
    nombreP:{
        type: DataTypes.STRING,
        allowNull: false
    },
    precio:{
        type: DataTypes.STRING,
        allowNull: false
    },
    referencia:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    estado2: DataTypes.BOOLEAN
})

export{Producto}
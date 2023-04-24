//importamos conexion con la base de datos
import db from "../database/db.js";

import { DataTypes } from "sequelize";

const productoModel =db.define('productos',{
    categoria:{type:DataTypes.STRING},
    descripcion:{type:DataTypes.STRING},
    idSucursal:{type:DataTypes.NUMBER},
  }, {
    timestamps: false
  });
export default productoModel
//importamos conexion con la base de datos
import db from "../database/db.js";

import { DataTypes } from "sequelize";

const sucursalModel =db.define('sucursales',{
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
      },
    nombre:{type:DataTypes.STRING},
    direccion:{type:DataTypes.STRING},
    correo:{type:DataTypes.STRING},
    departamento:{type:DataTypes.STRING},
    municipio:{type:DataTypes.STRING},
    telefono:{type:DataTypes.STRING},
  }, {
    timestamps: false
  });
export default sucursalModel
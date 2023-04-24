//importamos conexion con la base de datos
import db from "../database/db.js";

import { DataTypes } from "sequelize";

const productoSucursalModel =db.define('vista_productos_sucursales',{
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
      },
    categoria:{type:DataTypes.STRING},
    descripcion:{type:DataTypes.STRING},
    idSucursal:{type:DataTypes.NUMBER},
    nombre:{type:DataTypes.STRING},
    direccion:{type:DataTypes.STRING},
    correo:{type:DataTypes.STRING},
    departamento:{type:DataTypes.STRING},
    municipio:{type:DataTypes.STRING},
    telefono:{type:DataTypes.STRING},
    
});
export default productoSucursalModel
import productosSucursalModel from "../models/productoSucursalModel.js";
//metodos para el crud

//mostrar todos los registros

export const getAllproductosSucursal =async(req,res )=>{
    try {
        const productosSucursales = await productosSucursalModel.findAll({
            attributes: { exclude: ["updatedAt", "createdAt"] },
          });
        res.json(productosSucursales)
    } catch (error) {
        res.json({message:error.message})
    }
}

//mostrar solo un registro
export const getProductoSucursal =async(req,res)=>{
    try {
        const productosSucursales= await productosSucursalModel.findAll({
            attributes: { exclude: ["updatedAt", "createdAt"] },
            where:{id:req.params.id}
        })
        res.json(productosSucursales[0])
    } catch (error) {
        res.json({message:error.message})
    }
}
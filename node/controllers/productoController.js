import productoModel from "../models/productoModel.js";
//metodos para el crud


//crear registro

export const createProducto =async(req,res)=>{
    try {
       await productoModel.create(req.body)
       res.json({
        "message":"¡registro creado correctamente!"
       })
    } catch (error) {
        res.json({message:error.message})
    }
}

//actualiar registro

export const updateProducto =async(req,res)=>{
    try {
       await productoModel.update(req.body,{
        where:{id:req.params.id}
       })
       res.json({
        "message":"¡registro actualizado correctamente!"
       })
    } catch (error) {
        res.json({message:error.message})
    }
}


//eliminar registro

export const deleteProducto =async(req,res)=>{
    try {
       await productoModel.destroy({
        where:{id:req.params.id}
       })
       res.json({
        "message":"¡registro eliminado correctamente!"
       })
    } catch (error) {
        res.json({message:error.message})
    }
}
import sucursalesModel from "../models/productoModel.js";
//metodos para el crud

//crear registro

export const createSucursal =async(req,res)=>{
    try {
       await sucursalesModel.create(req.body)
       res.json({
        "message":"¡registro creado correctamente!"
       })
    } catch (error) {
        res.json({message:error.message})
    }
}

//actualiar registro

export const updateSucursal =async(reqres)=>{
    try {
       await sucursalesModel.update(req.body,{
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

export const deleteSucursal =async(req,res)=>{
    try {
       await sucursalesModel.destroy({
        where:{id:req.params.id}
       })
       res.json({
        "message":"¡registro eliminado correctamente!"
       })
    } catch (error) {
        res.json({message:error.message})
    }
}
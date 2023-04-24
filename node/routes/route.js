import express from 'express'
import{createProducto,updateProducto,deleteProducto} from'../controllers/productoController.js'
import{createSucursal,updateSucursal,deleteSucursal} from'../controllers/sucursalesController.js'
import {getAllproductosSucursal,getProductoSucursal } from '../controllers/productoSucursalController.js'

const router = express.Router();

// Rutas para productos
router.post('/producto', createProducto)
router.put('/producto/:id', updateProducto)
router.delete('/producto/:id', deleteProducto)

// Rutas para sucursales
router.post('/sucursal', createSucursal)
router.put('/sucursal/:id', updateSucursal)
router.delete('/sucursal/:id', deleteSucursal)

router.get('/', getAllproductosSucursal)
router.get('/:id', getProductoSucursal)


export default router


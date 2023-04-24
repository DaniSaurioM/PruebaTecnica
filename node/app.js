import express  from "express";

import cors from 'cors'


import db from "./database/db.js"
import appRoutes from './routes/route.js'


const app =express();


app.use(cors())
app.use(express.json())
app.use('/app', appRoutes)
try {
    await db.authenticate()
    console.log("conexión exitosa a la base de datos")
  } catch (error) {
    console.log(`conexión fallida: ${error}`)
  }


app.listen(8000,()=>{
    console.log('server UP running in http://localhost:8000/')
})
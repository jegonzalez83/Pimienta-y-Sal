const express = require("express");
const app = express();
const path = require("path");
const process = require("process");

/*Llamando enrutadores */
const indexRouter = require("../src/routes/indexRouter")
const productRouter = require("../src/routes/productRoutes")

const PORT = 3000;

/*Archivos estaticos */
app.use(express.static(path.join(__dirname, "../public")))

/*Views config */
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

/*Middlewares de Rutas */
app.use("/", indexRouter)
app.use("/producto", productRouter)

/*Levantar servidor */
app.listen(PORT, ()=>{
    console.log(`Servidor levantado en Puerto ${PORT}`)
})

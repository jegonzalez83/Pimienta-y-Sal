const{getProducts} = require("../data/products")



module.exports = {
    index: (req,res) => {

        let productoId = +req.params.productoId;

        let productoSolicitado = getProducts.find((producto)=>producto.id===productoId)

        res.render("index",{
            productos:getProducts,

            producto: productoSolicitado
        })
    }
}

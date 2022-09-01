const{getProducts} = require("../data/products")

module.exports = {
    productDetail: (req,res) => {

        let productoId = +req.params.id;

        let productoSolicitado = getProducts.find((producto)=>producto.id===productoId)

        res.render("detalleMenu",{
            
            productoSolicitado
        })
    }
}

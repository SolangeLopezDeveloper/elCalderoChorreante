const Drink = require('../models/Products')
const createError = require('http-errors');
const getProduct = async (req,res)=>{
    try {
     const product= await Drink.findOne()
        return res.status(201).json({
            ok: true,
           product
        })
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            message: error.message || "Ocurrió un error"
        })
    }
    
}
module.exports = {
    getProduct
}
const Products = require('../models/Products')
const createError = require('http-errors');
const Favorite = require('../models/Favorite')

const getPicadasService = async (req, res) => {
    try {
        const regex = new RegExp('picada', 'i')
        const picadas = await Products.find({ name: regex });
      
        return res.status(200).json({
            ok: true,
            picadas
        })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                message: error.message || "Error al obtener las picadas"
            })
        }

    }
    const getPromosService = async (req, res) => {
        try {
            const regex = new RegExp('promo', 'i')
            const promos = await Products.find({ name: regex });
          
            return res.status(200).json({
                ok: true,
                promos
            })
            } catch (error) {
                return res.status(error.status || 500).json({
                    ok: false,
                    message: error.message || "Error al obtener las promos"
                })
            }
    
        }
        const getBeersService = async (req, res) => {
            try {
                const regex = new RegExp('cerveza', 'i')
                const cervezas = await Products.find({ name: regex });
              
                return res.status(200).json({
                    ok: true,
                    cervezas
                })
                } catch (error) {
                    return res.status(error.status || 500).json({
                        ok: false,
                        message: error.message || "Error al obtener las cervezas"
                    })
                }
        
            }
            const getVinosService = async (req, res) => {
                try {
                    const regex = new RegExp('vino', 'i')
                    const vinos = await Products.find({ name: regex });
                  
                    return res.status(200).json({
                        ok: true,
                        vinos
                    })
                    } catch (error) {
                        return res.status(error.status || 500).json({
                            ok: false,
                            message: error.message || "Error al obtener las vinos"
                        })
                    }
            
                }
const getFavoriteDrinkService = async (req, res) => {
        try {
            const { id } = req.body

            const favoriteData = await Favorite.findById(id)
            return res.status(200).json({
                ok: true,
                favoriteData
            })


        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                message: error.message || "Ocurrió un error"
            })
        }
    }

    module.exports = {
        getPicadasService,
        getFavoriteDrinkService,
        getPromosService,
        getBeersService,
        getVinosService
    }
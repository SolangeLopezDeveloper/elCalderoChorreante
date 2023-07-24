const { getFavoriteDrinkService, getPicadasService } = require("../services/productService")
const Products = require('../models/Products')


const getFavoriteDrink = async (req,res) =>{
try {
  const {id} = req.body

  let drink = await getFavoriteDrinkService(id);
  return res.status(201).json({
    ok: true,
    message: 'Drink encontrado'
   
  })
} catch (error)  {
  return res.status(error.status || 500).json({
      ok: false,
      message: error.message || "Ocurrió un error"
  })
}
  
   
}
const getPicadas = async (req,res) =>{
  try {
    const regex = new RegExp('picada', 'i')
    const picadas = await Products.find({ name: regex });
    console.log(picadas);
    return res.status(200).json({
        ok: true,
        picadas
      })
     
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      message: error.message || "Ocurrió un error al obtener las picadas"
    });
  }
};
const getPromos = async (req,res) =>{
  try {
    const regex = new RegExp('promo', 'i')
    const promos = await Products.find({ name: regex });
    console.log(promos);
    return res.status(200).json({
        ok: true,
        promos
      })
     
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      message: error.message || "Ocurrió un error al obtener las promos"
    });
  }
};
const getBeers = async (req, res) => {
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
  const getVinos = async (req, res) => {
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
      const getLicors = async (req, res) => {
        try {
            const regex = new RegExp('licor', 'i')
            const licors = await Products.find({ name: regex });
          
            return res.status(200).json({
                ok: true,
                licors
            })
            } catch (error) {
                return res.status(error.status || 500).json({
                    ok: false,
                    message: error.message || "Error al obtener las licors"
                })
            }
    
        }


module.exports = {
  getFavoriteDrink,
  getPicadas,
  getPromos,
  getBeers,
  getVinos,
  getLicors
}
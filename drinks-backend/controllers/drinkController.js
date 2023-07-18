const { getProduct } = require("../services/drinkService")



const drinks = async (req,res) =>{

    return res.status(200).json({
        ok: true,
      drinks
    })
}

module.exports = {
   drinks
}
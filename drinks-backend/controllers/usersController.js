const Favorite = require('../models/Favorite');
const createError = require('http-errors');
const User = require('../models/Users');

const profile = async (req, res) => {
    return res.status(200).json({
        ok: true,
        user: req.user
    })
}

const toggleFavorite = async (req, res) => {
    try {

        if (!req.user) {
            throw createError(401, "No existe autorización")
        }

        const user = await User.findById(req.user.id).populate('favorites')

        const { drink } = req.query
        if (!drink) {
            throw createError(400, "Se requiere el Id de la bebida")
        }

        if (!user.favorites.map(favorite => favorite.drink).includes(drink)) {
            const favoriteStore = await Favorite.create({
                drink,
                user
            })
            user.favorites.push(favoriteStore._id)
            await user.save()


        } else {
            const favorite = await Favorite.findOne({
                drink,
                user
            })
            favorite.deleteOne()
            const favoritesUpdated = user.favorites.filter(favorite => favorite.drink !== drink)
            user.favorites = favoritesUpdated
            await user.save()
        }

        return res.status(200).json({
            data: user.favorites
        })
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            message: error.message || "Ocurrió un error"
        })
    }
}


module.exports = {
    profile,
    toggleFavorite
}
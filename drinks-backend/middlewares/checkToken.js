const createError = require('http-errors');
const User = require('../models/User')
const { verify } = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {

        if (!req.headers.authorization) {
            createError(401, "Se require un token")
        }

        const token = req.headers.authorization;
        const decoded = verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decoded.user.id).select("-password -token -cheked -createdAt -updatedAt -__v")

        next()

    } catch (error) {
        let message;

        switch (error.message) {
            case "jwt malformed":
                message = "El token está corrupto"
                break;
            case "jwt expired":
                message = "El token ha expirado"
                break;
            case "invalid token":
                message = "El token es inválido"
                break;
            case "invalid signature":
                message = "Firma inválida"
            default:
                message = error.message
                break;
        }

        return res.status(error.status || 500).json({
            ok: false,
            message: error.message || "Ocurrió un error"
        })
    }
}
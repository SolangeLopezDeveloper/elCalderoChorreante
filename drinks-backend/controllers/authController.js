const generateJWT = require('../helpers/generateJWT');
const generateTokenRandom = require('../helpers/generateTokenRandom');
const User = require('../models/Users');
const createError = require('http-errors');

const register = async (req, res) => {


    try {
        const { name, email, password } = req.body;

        if ([name, email, password].includes("") || !name || !email || !password) {
            throw createError(400, "Todos los campos son requeridos")
        }

        let user = await User.findOne({
            email
        })

        if (user) {
            throw createError(400, "El email ya se encuentra registrado")
        }

        user = new User(req.body);
        user.token = generateTokenRandom();
        const userStore = await user.save();

        console.log(userStore);

        //ToDo : enviar email de confirmación de registro

        return res.status(201).json({
            ok: true,
            message: "Usuario registrado con éxito, se ha enviado un mail de confirmación"
        })

    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            message: error.message || "Ocurrió un error"
        })
    }

}

const login = async (req, res) => {

    try {

        console.log(req.body);

        const { email, password } = req.body;
        if ([email, password].includes("") || !email || !password) {
            throw createError(400, "Todos los campos son requeridos")
        }
        let user = await User.findOne({
            email
        })
        if (!user) {
            throw createError(400, "Credenciales inexistentes")
        }
        if (await user.checkedPassword(password)) {
            return res.status(200).json({
                ok: true,
                token: generateJWT({
                    user: {
                        id: user._id,
                        name: user.name


                    }
                })
            })
        } else {
            throw createError(403, "Credenciales inválidas")
        }


    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            message: error.message || "Ocurrió un error"
        })
    }
}



module.exports = {
    register,
    login
}
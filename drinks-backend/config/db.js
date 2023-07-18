require('dotenv').config();

const mongoose = require('mongoose');
/* ¡bajar la version de mongoose a 6.5.0 para deployar en render! */
const connectDB = async () => {
    try {

        const connection = await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `${connection.connection.host}:${connection.connection.port}`

        console.log(`MongoDB connected in ${url}`);

    } catch (error) {
        console.log(error.message);
    }
}
module.exports = connectDB
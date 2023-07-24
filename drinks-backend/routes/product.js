
const router = require('express').Router();
const { getPicadas, getPromos, getBeers, getVinos, getLicors } = require('../controllers/productController');

//const { drinks } = require('../controllers/drinkController');



router
.get('/api/v1/picadas', getPicadas)
.get('/api/v1/promos', getPromos)
.get('/api/v1/cervezas', getBeers)
.get('/api/v1/vinos', getVinos)
.get('/api/v1/licores', getLicors)




module.exports = router;
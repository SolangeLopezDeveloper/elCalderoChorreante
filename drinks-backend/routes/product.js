const router = require('express').Router();
const { drinks } = require('../controllers/drinkController');



router
.get('/api/v1/drinks', drinks)



module.exports = router;
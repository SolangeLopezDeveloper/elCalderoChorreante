const router = require('express').Router();
const { register, login } = require('../controllers/authController');
const { getFavoriteDrink } = require('../controllers/productController');
const { profile, toggleFavorite } = require('../controllers/usersController');
const checkToken = require('../middlewares/checkToken');


/* GET home page. */
router
.get('/', function(req, res, next) {
  res.status(200).json({
    ok: true,
    message: "Done!"
  })
})
.post('/api/v1/register', register)
.post('/api/v1/login', login)

.get('/api/v1/profile',checkToken, profile)
.get('/api/v1/favorite', checkToken, toggleFavorite)
.get('/api/v1/favoriteDrink', getFavoriteDrink)


module.exports = router;

const express = require ('express'); 
const router = express.Router();
const calculadoraController = require('../controllers/calculadoraController')


router.get ('/', calculadoraController.get)

router.post('/sum', calculadoraController.soma);

router.post('/sub', calculadoraController.subtracao);

router.post('/mult', calculadoraController.multiplicacao);

router.post('/div', calculadoraController.divisao);



module.exports = router;
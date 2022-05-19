const express = require ('express'); 
const router = express.Router();
const calculadoraController = require('../controllers/calculadoraController')


router.get ('/', calculadoraController.get)

router.post('/sum', calculadoraController.soma);

router.post('/sub', calculadoraController.subtracao);

router.post('/mult', calculadoraController.multiplicacao);

router.post('/div', calculadoraController.divisao);

router.post('/raiz', calculadoraController.raizQuadrada);

router.post('/porc', calculadoraController.porcentagem);



module.exports = router;
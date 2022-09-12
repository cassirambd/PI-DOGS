const { Router } = require('express');
const routerDogs = require('./r_dogs');
const routerTemp =  require('./r_temperaments');
const routerDelete = require('./r_delete');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', routerDogs);
router.use('/temperaments', routerTemp);
router.use('/dog', routerDelete);


module.exports = router;

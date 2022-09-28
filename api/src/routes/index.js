const { Router } = require('express');
const routerDogs = require('./r_dogs');
const routerTemp =  require('./r_temperaments');
const routerPost = require('./r_post_dogs');

const router = Router();

router.use('/dogs', routerDogs);
router.use('/temperaments', routerTemp);
router.use('/dog', routerPost);


module.exports = router;

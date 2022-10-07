const router = require('express').Router();

const apiRoutes = require('./apis');
const homeRoutes = require('./hroutes');

router.use('/', hroutes);
router.use('/apis', routes);

module.exports = router;
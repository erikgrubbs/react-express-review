const controller = require('./controller');
const router = require('express').Router();


router
  .route('/api')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete);

router
  .route('/name/:name')
  .get(controller.name);  

module.exports = router;


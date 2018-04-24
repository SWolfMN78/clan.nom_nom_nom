const router = require('express').Router();
const recipeController = require('../../controllers/recipe_controller');

// Define routes
router.route('/')
  .get(recipeController.findAll)
  .post(recipeController.create);
//
router.route('/:id')
  .get(recipeController.findById)
  .put(recipeController.update)
  .delete(recipeController.remove);
//

module.exports = router;
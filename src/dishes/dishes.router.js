const router = require("express").Router();
const controller = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /dishes routes needed to make the tests pass

//Allows for requests using list(), create() and for types that are not available via "/"
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

//Allows for requests using read(), put() and for types that are not available via "/:dishId"
router
  .route("/:dishId")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

module.exports = router;

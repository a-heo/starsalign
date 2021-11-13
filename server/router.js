const router = require("express").Router();

const userController = require("./controller/user");
const journalController = require("./controller/journal");

router.use((req, res, next) => {
  console.log("Time: ", Date.now()), next();
});

//journalroutes
router.post("/:id/journal", journalController.create);
router.get('/:id/journal', journalController.get);
router.delete('/:id/journal', journalController.delete);

router.get("/info", userController.get);
router.post("/login", userController.check);
router.post("/", userController.create);
//create get router by id and create controller for this

module.exports = router;

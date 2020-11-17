const router = require("express").Router();
const expensesRoute = require("./expenses");

// go to /api/comments
router.use("/expenses", expensesRoute);

module.exports = router;

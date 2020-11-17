const express = require("express");
const router = express.Router();
const expensesRoute = require("./expenses");

// get route -> index
router.get("/", (req, res) => {
   res.redirect("/expenses");
});

// comments page
router.use("/expenses", expensesRoute);

module.exports = router;

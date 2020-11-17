const express = require("express");
const router = express.Router();
const db = require("../../models");

// /api/commnets/create 
// post comment route -> back to index
router.post("/create", (req, res, next) => {
   db.Log.create(req.body)
      .then(newExpense => {
         console.log("[node] new expense:", newExpense.expense);
         res.redirect("/");
      // optionally return data created
      // res.json(newComment)
      })
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;

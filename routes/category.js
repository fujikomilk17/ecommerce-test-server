const express = require("express");
const router = express.Router();

// middleware
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  list,
  update,
  read,
  remove,
  getSubs,
} = require("../controllers/category");

// route
router.post("/category", authCheck, adminCheck, create);
router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", authCheck, adminCheck, update);
router.delete("/category/:slug", authCheck, adminCheck, remove);

router.get("/category/subs/:_id", getSubs);

module.exports = router;

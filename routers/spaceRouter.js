// router/spaceRouter.js
const { Router } = require("express");
const Space = require("../models").space;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const spaces = await Space.findAll();
    console.log("spaces", spaces);
    if (spaces) {
      res.send(spaces);
    } else {
      res.status(404).send("There are no spaces.");
    }
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;

var express = require("express");
var router = express.Router();
const Image = require("../Model/Image");
const { updateImage } = require("../Repo/ImageRepo");

router.put("/save", async (req, res) => {
  if (await updateImage(req)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});
router.get("/init", (req, res) => {
  Image.find({})
    .then(result => {
      res.send(result[0]);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});
module.exports = router;

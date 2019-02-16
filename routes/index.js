var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

router.post("/", function(req, res) {
  /* Server side data validation is omitted */

  let data = req.body.data;
  let steps = [];
  if (req.body.type === "Int") {
    //transfer string to number
    for (let i = 0; i < data.length; i++) {
      data[i] = parseInt(data[i]);
    }
  }
  //Bubble sort
  let change = 1;
  for (let i = 0; i < data.length - 1 && change !== 0; i++) {
    change = 0;
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j + 1];
        data[j + 1] = data[j];
        data[j] = temp;
        steps.push([...data]);
        change = 1;
      }
    }
  }
  res.send(steps);
});

var express = require("express");
var router = express.Router();
var randomize = require("randomatic");

const mapping = {
  upper: "A",
  lower: "a",
  numbers: "0",
  symbols: "!",
};

// a: Lowercase alpha characters (abcdefghijklmnopqrstuvwxyz')
// A: Uppercase alpha characters (ABCDEFGHIJKLMNOPQRSTUVWXYZ')
// 0: Numeric characters (0123456789')
// !: Special characters (~!@#$%^&()_+-={}[];\',.)
// options
//  length: 12
//  upper: true
//  lower: true
//  numbers: true
//  symbols: true
const getOptions = (options) => {
  let pswString = "";
  Object.keys(options).forEach((key) => {
    const value = options[key];

    if (value === "true") {
      pswString = pswString.concat("", mapping[key]);
    }
  }); // ["upper", "lower", ...]

  return pswString;
};

/* GET home page. */
router.get("/", function (req, res, next) {
  const options = req.query;
  console.log(options.length);
  const settings = getOptions(options);
  const password = randomize(settings, options.length);
  res.send(password);
});
module.exports = router;

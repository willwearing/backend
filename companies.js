const router = require("express").Router();
const Company = require("../models/Companies");

// @desc		Test end is working
// @route		/test
router.get("/test", (req, res) => {
  res.status(200).json({ message: "server is running" });
});
// @desc		Get all companies
// @route		GET /
router.get("/", (req, res) => {
  // Company.find((err, data) => {
  //   if (err) {
  //     res.status(500).send(err)
  //   } else {

  //   }
  // })
  Company.find(req.query)
    .then((companies) => res.json(companies))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
// @desc		Get a company by id
// @route		GET /:id
router.get("/:id", (req, res) => {
  Company.findById(req.params.id)
    .then((company) => res.json(company))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
// @desc		Add a new company
// @route		POST /
router.post("/", (req, res) => {
  const newCompanies = new Company({
    name: req.body.name,
    ticker: req.body.ticker,
    price: req.body.price,
    listed: req.body.listed,
  });

  newCompanies
    .save()
    .then(() => res.json(newCompanies))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
// @desc		Update a company by id
// @route		PATCH /:id

// @desc		Remove a company by id
// @route		DELETE /:id
router.delete("/:id", (req, res) => {
  Company.findByIdAndDelete(req.params.id)
    .then(() => res.json(`Deleted`))
    .catch((err) => res.status(400).json(`${err}`));
});

module.exports = router;

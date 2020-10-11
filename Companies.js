const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ticker: { type: String, require: true, unique: true },
    price: { type: Number, required: true },
    listed: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", CompanySchema);

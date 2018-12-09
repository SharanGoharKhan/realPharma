var mongoose = require("mongoose");


var EachMedicineSchema = new mongoose.Schema({
  name: String,
  hexcode: [],
  retailer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Retailer"
  },
  manufacturer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manufacturer"
  },
  timestamp: {
    createdAt: Date,
    updatedAt: Date
  }

});

module.exports = mongoose.model("EachMedicine", EachMedicineSchema);

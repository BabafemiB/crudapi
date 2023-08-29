const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const inventoryDatasSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) throw new Error("Negative calories aren't real.");
      },
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InventoryData", inventoryDatasSchema);

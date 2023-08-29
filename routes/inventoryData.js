const express = require("express");
const router = express.Router();
const {
  createInventoryData,
  getInventoryDatas,
  getInventoryData,
  deleteInventoryData,
  updateInventoryData,
} = require("../controllers/inventoryDataController");

const userAuth = require("../middlewares/userAuth");

// require auth for all inventory data routes
router.use(userAuth);

//Get all inventory datas
router.get("/", getInventoryDatas);

//Get a single inventory data
router.get("/:id", getInventoryData);

//Create a new inventory data
router.post("/", createInventoryData);

//Delete a single inventory data
router.delete("/:id", deleteInventoryData);

//Update a single inventory data
router.patch("/:id", updateInventoryData);

module.exports = router;

const InventoryData = require("../models/inventorydataModel");
const mongoose = require("mongoose");

//GET all inventorydatas
const getInventoryDatas = async (req, res) => {
  const user_id = req.user._id;
  try {
    const inventorydatas = await InventoryData.find({ user_id }).sort({
      createdAt: -1,
    }); //Listing the database in descending order (Newest at the top)
    res.status(200).json(inventorydatas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//GET a inventorydata
const getInventoryData = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Not a valid MongoDB ID" });
    }
    const inventorydata = await InventoryData.findById(id);
    if (!inventorydata) {
      return res.status(404).json({ error: "No such inventorydata" });
    }
    res.status(200).json(inventorydata);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//CREATE a inventorydata
const createInventoryData = async (req, res) => {
  const { item, category, quantity } = req.body;
  //Making a more friendly error message, due to omitting mandatory field upon submission of new inventorydata
  let emptyFields = [];

  if (!item) {
    emptyFields.push("item");
  }
  if (!category) {
    emptyFields.push("category");
  }
  if (!quantity) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }
  //add doc to db
  try {
    const user_id = req.user._id;
    const inventorydata = await InventoryData.create({
      item,
      category,
      quantity,
      user_id,
    });
    res.status(200).json(inventorydata);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE a inventorydata
const deleteInventoryData = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Not a valid MongoDB ID" });
    }
    const inventorydata = await InventoryData.findOneAndDelete({ _id: id });
    if (!inventorydata) {
      return res.status(404).json({ error: "No such inventorydata" });
    }
    res.status(200).json(inventorydata);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE a inventorydata
const updateInventoryData = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Not a valid MongoDB ID" });
    }
    const inventorydata = await InventoryData.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    if (!inventorydata) {
      return res.status(404).json({ error: "No such inventorydata" });
    }
    res.status(200).json(inventorydata);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createInventoryData,
  getInventoryDatas,
  getInventoryData,
  deleteInventoryData,
  updateInventoryData,
};

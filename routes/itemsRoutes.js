const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemsController");

router.get('/',itemsController.getAllItems);

router.get("/:id", itemsController.getSingleItem);

router.post("/", itemsController.addNewItem);

router.put("/:id", itemsController.editItem);

router.delete("/:id", itemsController.deleteItem);

module.exports=router; 
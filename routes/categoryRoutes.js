const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getAllCategories);

router.get("/:id", categoryController.getSingleCategory);

router.get("/:id/items",categoryController.getAllItemsInCategory);

router.post("/", categoryController.addNewCategory);

router.put("/:id", categoryController.editCategory);

router.delete("/:id", categoryController.deleteCategory);

module.exports=router; 
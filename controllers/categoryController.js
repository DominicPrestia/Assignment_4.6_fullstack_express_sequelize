const Category = require("../models/categoryModel");
const Item = require("../models/itemsModel");

exports.getAllCategories = async (req,res) => {
    const result = await Category.findAll();
    res.json(result);
}

exports.getAllItemsInCategory = async (req,res) => {
    await Category.findByPk(req.params.id).then(category =>{
        if (category){
            Item.findAll({
                where:{
                    category_id: category.id
                }
            }).then(items => {
                if(items.length>0){
                    res.json(items);
                }else{
                    res.status(404).json({ error: 'No items in Category' });
                }
            })
        }else {
            res.status(404).json({ error: 'Category not found' });
        }
    })
    
}

exports.getSingleCategory = async (req, res) => {
    const result = await Category.findByPk(req.params.id);
    if(result != null){ 
        return res.json(result);
    }
    return res.send("Category not found");  
}

exports.addNewCategory = async (req, res) => {
    await Category.create({
        name: req.body.name
    });
    const result = await Category.findByPk(req.params.id);
    return res.json(result);
}

exports.editCategory = async (req, res) => {
    const result = await Category.findByPk(req.params.id);
    if(result != null){
        await Category.update({name: req.body.name}, {where: {id: req.params.id}});
        return res.json(result);
    }
    return res.send("Category not found"); 
}

exports.deleteCategory = async (req, res) => {
    const result = await Category.findAll({where: {id: req.params.id}});
    if(result != null){
        await Category.destroy({where: {id: req.params.id}});
        return res.json(result);
    }
    return res.send("Category not found"); 
}
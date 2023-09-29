const Category = require("../models/categoryModel");
const Item = require("../models/itemsModel");

exports.getAllItems = async (req,res) => {
    const result = await Item.findAll({
        attributes:['name','price','category_id'],
        include:[{
            model:Category,
            attributes:['name']
        }]
    });
    res.json(result);
}

exports.getSingleItem = async (req, res) => {
    const result = await Item.findByPk(req.params.id,{
        attributes:['name','price'],
        include:[{
            model:Category,
            attributes:['name']
        }]
    });
    if(result != null){
        return res.json(result);
    }
    return res.send("Item not found");  
}

exports.addNewItem = async (req, res) => {
    await Item.create({ 
        name: req.body.name,
        category_id:req.body.category_id
    });
    const result = await Item.findByPk(req.params.id);
    return res.json(result); 
}

exports.editItem = async (req, res) => {
    const result = await Item.findByPk(req.params.id);
    if(result != null){
        await Item.update({name: req.body.name}, {where: {id: req.params.id}});
        await Item.update({price:req.body.price}, {where: {id: req.params.id}});
        return res.json(result);
    }
    return res.send("Item not found"); 
}

exports.deleteItem = async (req, res) => {
    const result = await Item.findAll({where: {id: req.params.id}});
    if(result != null){
        await Item.destroy({where: {id: req.params.id}});
        return res.json(result);
    }
    return res.send("Item not found"); 
}
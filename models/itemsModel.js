const {DataTypes} = require("sequelize")
const {sequelize} = require("./conn");
const Category = require("./categoryModel");

const Item = sequelize.define("item",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type:DataTypes.DOUBLE,
    },
    category_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'categories', 
            key:'id'
        }
    }
},{ 
    timestamps:false
})

Item.belongsTo(Category,{
    foreignKey:'category_id', 
    //onDelete:'CASCADE'
})

module.exports=Item;  
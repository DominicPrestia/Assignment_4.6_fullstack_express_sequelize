const {Sequelize} = require("sequelize");
const config = require("../config.json")


//DB connection configuration
const sequelize = new Sequelize(config.db_name,config.db_userName,config.db_pass,{
    host:config.host,
    dialect:config.dialect,
});

//Test Connection Function
async function testConn(){
    try{
        await sequelize.authenticate();
        console.log("Connection Successful to DB");
        return true;
    }catch(err){
        console.error("Unable to connect to DB",err);
        return false;
    }
}

testConn();

module.exports={sequelize,testConn};
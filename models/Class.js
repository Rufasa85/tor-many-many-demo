const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Class extends Model {}

Class.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING,
         allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    maxStudents:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:1
        }
    }
},{
    sequelize
});

module.exports=Class
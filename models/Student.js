const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model {}

Student.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING,
         allowNull:false
    }
},{
    sequelize
});

module.exports=Student
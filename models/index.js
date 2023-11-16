const Class = require("./Class");
const Student = require("./Student");

Student.belongsToMany(Class,{
    through:"StudentsClasses"
});
Class.belongsToMany(Student,{
    through:"StudentsClasses"
});


module.exports = {
    Class,
    Student
}
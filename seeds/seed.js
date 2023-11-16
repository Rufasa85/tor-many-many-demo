const sequelize = require("../config/connection");
const {Student, Class} = require("../models");

const studentData = [
    {
        name:"Shiva TheCat"
    },
    {
        name:"Bahamut TheCat"
    },
    {
        name:"Bette Midler TheGecko"
    }
]

const classData = [
    {
        name:"naps 101",
        description:"how to take a nap, including picking the best bed, cutest pose, and sweetest sleepy snories.  Prepare to nap!",
        maxStudents:10  
    }, 
    {
        name:"naps 102",
        description:"even moar nap tips, including how to deal with hoomans trying to use the giant cat beds for their own naps.",
        maxStudents:5  
    },
    {
        name:"pet pics 101",
        description:"Do you want to be the next viral internet pet? Learn how to do cute silly stuff that your hoomans will totally share pictures of!",
        maxStudents:300 
    },
]

const seedMe = async()=>{
    await sequelize.sync({force:true});
    await Student.bulkCreate(studentData);
    await Class.bulkCreate(classData);
    console.log("seeded!")
    process.exit(0)
}

seedMe();
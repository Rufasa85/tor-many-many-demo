const express = require('express');
const router = express.Router();
const {Student,Class} = require('../models');

router.get('/',(req,res)=>{
    Student.findAll().then(dbStudents=>{
        res.json(dbStudents)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

    
router.get('/:id',(req,res)=>{
    Student.findByPk(req.params.id,{
        include:[Class]
    }).then(dbStudent=>{
        if(!dbStudent){
            res.status(404).json({msg:"no such Student"})
        } else{
            res.json(dbStudent)
        }
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

router.post('/',(req,res)=>{
    Student.create({
        name:req.body.name
    }).then(newStudent=>{
        res.json(newStudent)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

router.post("/:stuId/addClass/:classId",(req,res)=>{
    Student.findByPk(req.params.stuId).then(dbStu=>{
        dbStu.addClass(req.params.classId).then(data=>{
            res.json(data);
        })
    })
})

router.put('/:id',(req,res)=>{
    Student.update({
        name:req.body.name
    },{
        where:{
            id:req.params.id
        }
    }).then(editedStudent=>{
        if(!editedStudent[0]){
            res.json({msg:"no such Student!"})
        } else {
            res.json(editedStudent)
        }
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

router.delete('/:id',(req,res)=>{
    Student.destroy({
        where:{
            id:req.params.id
        }
    }).then(delStudent=>{
        if(!delStudent){
            res.status(404).json({msg:"no such Student"})
        } else{
            res.json(delStudent)
        }
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})
module.exports = router
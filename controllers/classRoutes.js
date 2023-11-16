const express = require('express');
const router = express.Router();
const {Class} = require('../models');

router.get('/',(req,res)=>{
    Class.findAll().then(dbClasses=>{
        res.json(dbClasses)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

    
router.get('/:id',(req,res)=>{
    Class.findByPk(req.params.id).then(dbClass=>{
        if(!dbClass){
            res.status(404).json({msg:"no such Class"})
        } else{
            res.json(dbClass)
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
    Class.create({
        name:req.body.name,
        description:req.body.description,
        maxStudents:req.body.maxStudents
    }).then(newClass=>{
        res.json(newClass)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            msg:"womp womp womp",
            err
        })
    })
})

router.put('/:id',(req,res)=>{
    Class.update({
        name:req.body.name,
        description:req.body.description,
        maxStudents:req.body.maxStudents
    },{
        where:{
            id:req.params.id
        }
    }).then(editedClass=>{
        if(!editedClass[0]){
            res.json({msg:"no such class!"})
        } else {
            res.json(editedClass)
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
    Class.destroy({
        where:{
            id:req.params.id
        }
    }).then(delClass=>{
        if(!delClass){
            res.status(404).json({msg:"no such Class"})
        } else{
            res.json(delClass)
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
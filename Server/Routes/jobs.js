const express = require('express');
const router = express.Router();
const JOB = require('../models/JobSchema');

// post jobs
router.post('/job',async (req,res)=>{
    try{        
        const note = await JOB.create(req.body);
        return res.status(200).json({
        note,
        message: "job added successfully"
    })
    }
    catch(e){
        return res.status(422).json({    
            status: "failure",        
            error: e.error
        })  
    }
})

// display all jobs
router.get('/job', async (req,res)=>{
    try{
        const job = await JOB.find();
        return res.status(200).json({
            status: "success",            
            job,        
    })
    }
    catch(e){
        return res.status(422).json({    
            status: "failure",        
            error: e.error
        })
    }
})

// find specific job
router.get('/job/:id',async (req, res)=>{
    try{        
        const job = await JOB.findById({_id: req.params.id});
        return res.status(200).json({
            status: "success",            
            job,        
    })
    }
    catch(e){
        return res.status(422).json({    
            status: "failure",        
            error: e.error
        })
    }
})



module.exports = router
const express = require('express')
const router = express.Router()
const worker = require('../module/worker')


    
    router.post('/',async(req,res)=>{
      try{
        const data = req.body;
        const newWorker = new worker(data)
        const response = await newWorker.save();
        console.log('data saved');
        res.status(200).json(response);
      }
      catch(err){  
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
      
      }
      }
      )
      router.get('/',async(req,res)=>{
        try{
          
          const response = await worker.find();
          
          console.log('fatch data successfully');
          res.status(200).json(response);
        }
        catch(err){  
          console.log(err);
          res.status(500).json({ error: 'Internal server error' });
        
        }
        }
        )

      module.exports = router;
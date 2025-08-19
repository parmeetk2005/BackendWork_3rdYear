const express = require('express');
const router = express.Router();
const { m5 } = require('../middleware/routeLevel');
router.use(m5); // this will run on all the routes in this file
router.post('/', (req,res)=>{
    res.json({
        success: true,
        message: "User added successfully"
    })
})

router.get('/', (req, res)=>{
    res.json({
        success: true,
        message: "all users data fetched successfully"
    })
})
router.get('/:id', (req, res)=>{
    res.json({
        success : true,
        message: "single user data fetched successfully"
    })
})


module.exports = router;






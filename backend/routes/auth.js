const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/', [
    body('email','enter valid email').isEmail(),
    body('name').isLength({min:5}),
    body('password').isLength({min:5})
], (req, res) => {
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    }


    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    // res.send(req.body);

    User.create({
        name: req.body.name,
        password: req.body.password,
        email:req.body.email
      }).then(user => res.json(user)).catch(err=>{console.log(err)
        res.json({error:'Please enter a unique email'})});


})

module.exports = router
const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');


//create a user with /api/auth/createuser. No login required
router.post('/createuser', [
    body('email', 'enter valid email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    try {
        //check whether email exists already
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "email already exists" })
        }

        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
        res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
    //   .then(user => res.json(user)).catch(err=>{console.log(err)
    //     res.json({error:'Please enter a unique email'})});
})

module.exports = router
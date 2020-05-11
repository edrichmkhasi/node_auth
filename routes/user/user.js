const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt =require('bcrypt');

const User = require('../models/user');

//create new user
//make sure to hash the password before storing
router.post('/signup', (req, res, next) => {
   bcrypt.hash(req.body.password, 10, (err, hash) => {
      // check for an error and return a json object
      if (err) {
         return res.status(500).json({
            error: err
         });
      }else{
         const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash,
            username: req.body.username
         });
         user
         .save()
         .then( result => {
            console.log(result);
            res.status(201).json({
               message: 'User created :)'
            })
         })
         .catch(err => {
            console.log(err);
            res.status(500).json({
               error: err
            });
         });
      }
   })
});



module.exports = router;
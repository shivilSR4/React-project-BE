const { response } = require('../app')
const USERS = require('../Model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Adjust the path to your user model

const doSignup = (req, res) => {
  bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS), function(err, hash) {
    if (err) {
      return res.status(500).json({ message: 'Error hashing password' });
    }

    const newUser = new USERS({
      Name: req.body.Name,
      email: req.body.email,
      mobileNumber: req.body.mobileNumber,
      password: hash
    });

    newUser.save()
      .then(response => {
        res.status(200).json({ message: 'Signup successful' });
      })
      .catch(error => {
        console.log(error);
        if (error.code === 11000) {
          res.status(500).json({ message: `${req.body.email} is already existing` });
        } else {
          res.status(500).json({ message: 'Something went wrong' });
        }
      });
  });
};


const doLogin = async(req,res)=>{
    try {
        const {email,password} = req.body
    const userData = await USERS.findOne({email:email})
    if(userData){
      bcrypt.compare(password,userData.password,(err,result)=>{
        if(result){
       
userData.password = undefined
   const options = {
    expiresIn:"2d",
    algorithm:"HS256"
   }
const token = jwt.sign({...userData},process.env.JWT_PASSWORD,options)
   res.status(200).json({user:userData,token})
        }else{
            res.status(401).json({message:"invalid credential"})
        }
      })
    }else{
        res.status(401).json({message:"invalid credential"})
    }
    } catch (error) {
        
    }

}

module.exports = {doSignup,doLogin}
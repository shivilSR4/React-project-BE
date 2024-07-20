const { response } = require('../app')
const jwt = require('jsonwebtoken')
const COURTS = require('../Model/courtModel') 

const createnewcourt = (req,res)=>{
  const {
    name,
    type,
    address1,
    address2,
    address3,
    location,
    landMark,
    pin,
    contactNumber,
    description,
    
  } = req.body
  
  const pics = req.files.map((file)=>{return{name:file.filename,type:file.mimetype}})

  console.log(pics);

  COURTS({
    name,
    type,
    address1,
    address2,
    address3,
    location,
    landMark,
    pin,
    contactNumber,
    description,
    courtPics:pics 

}).save().then((resp)=>{
    
res.status(200).json({message:'court added successfully'})

}).catch((err)=>{
  console.log(err);
  res.status(500).json({message:'something went wrong'})
})
}

module.exports = {createnewcourt}
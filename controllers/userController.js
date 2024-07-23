const COURTS = require('../Model/courtModel')

const getAllCourtData = (req,res,next)=>{
     try {
        COURTS.find().then((result)=>{
            res.status(200).json(result)
       }).catch((err)=>{
            next()
       })

     } catch (error) {
        next()
     }
          
}

const getSingleCourtData = (async(req,res,next)=>{
    try {
      const courtData = await COURTS.findOne({_id:req.query.courtId})
      res.status(200).json(courtData)
    } catch (error) {
        next()
    }

})

module.exports = {getAllCourtData,getSingleCourtData}
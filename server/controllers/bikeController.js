const vehicles=require('../models/vehicleModel')

exports.getBikes=async(req,res)=>{
    try {
        console.log("inside get bikes");
        
        const bikes=await vehicles.find()
        res.status(200).json(bikes)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


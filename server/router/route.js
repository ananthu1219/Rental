const express=require("express")
const bikeController=require('../controllers/bikeController')
const route=express.Router()

route.get('/api/getBikes',bikeController.getBikes)

module.exports = route;
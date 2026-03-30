const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    lowercase: true
  },
  engineCapacity: {
    type: Number,
    required: function () {
      return !this.isElectric
    }
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  mileage: Number,

  image: {
    type: String
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  category: {
    type: String,
    enum: ['Naked', 'Sports', 'Cruiser', 'Commuter', 'Electric']
  },

  isElectric: {
    type: Boolean,
    default: false
  },
  isAvailable: {
    type: Boolean,
    default: true
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('Vehicle', vehicleSchema)
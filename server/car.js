const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: {
      type: String,
      //required: true,
    },
    subtitle: {
      type: String,
      //required: true,
    },
    year: {
        type: String,
        //required: true,
    },
    mileage_in_km: {
      type: String,
      //required: true
    },
    engine_capacity_cm3: {
      type: String,
      //required: true
    },
    fuel_type: {
      type: String,
      //required: true
    },
    city: {
      type: String,
      //required: true
    },
    region: {
      type: String,
      //required: true
    },
    price_PLN: {
      type: String,
      //required: true
    }
  });

module.exports = mongoose.model('Car', carSchema);

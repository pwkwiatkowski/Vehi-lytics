const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    year: {
        type: String,
        required: true,
    },
  });

module.exports = mongoose.model('Car', carSchema);

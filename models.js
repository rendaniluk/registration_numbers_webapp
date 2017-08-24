const mongoose = require('mongoose');
module.exports = function(mongoUrl) {
  mongoose.Promise = global.Promise;
  mongoose.connect(mongoUrl);

  const registrationSchema = mongoose.Schema({
    registration: String
  });

  registrationSchema.index({
    registration: 1
  }, {
    unique: true
  });

  const lic_number = mongoose.model('lic_number', registrationSchema);

  return {
    lic_number
  };
};

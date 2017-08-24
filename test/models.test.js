const assert = require('assert');
const Models = require('../models');
describe('models should be able to:', function(){

  var models = Models("mongodb://localhost/registration_numbers");

   beforeEach(function(done) {
     models.lic_number.remove({}, function(err) {
       done(err);
     })
   })


it('store Registration numbers in mongoDB', function(){
  var licenceNumList = {
       registration: 'new regNum'
     };

     models.lic_number
       .create(licenceNumList, function(err) {
         models.lic_number.find({
           registration: 'new regNum'
         }, function(err, lic_numbers) {
           assert.equal(1, lic_numbers.length);
           done(err)
         })
       });
})
})

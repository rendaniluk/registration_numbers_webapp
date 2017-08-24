'use strict'
////////////////////module export function////////////////
module.exports = function() {

  const licList = [];

  const index = function(req, res) {
    res.render('pages/index');
  };

  const createReg = function(req, res) {
    var license = req.body.registration;
    var regNum = license.substr(0, 2).toUpperCase() + ' ' + license.substr(2).toLowerCase()
  if(!regNum){
    req.flash('error', 'Please enter name and select radio button!')
    res.redirect('/')
  }else {
    licList.push(regNum);
  }

    res.render('pages/index', {
      licenceNum: licList
    })
  };


  return {
    index,
    createReg
  }

}

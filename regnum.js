'use strict'
////////////////////module export function////////////////
module.exports = function() {

  //////////empty list/////////////////////
  const licList = [];

  /////////////////rendering a form////////////////////////
  const index = function(req, res) {
    res.render('pages/index');
  };
  ////////////////////////oOo////////////////////////////////

  /////////////creating registration number function//////////
  const createReg = function(req, res) {
    var license = req.body.registration;
    var regNum = license.substr(0, 2).toUpperCase() + ' ' + license.substr(2).toLowerCase()
    if (!license || license == undefined) {
      req.flash('error', 'Please enter Registration Number!')
      res.redirect('/')
    } else {
      licList.push(regNum);
      res.render('pages/index', {
        licenceNum: licList
      })
    }
  };
  ////////////////////////////oOo///////////////////////////////

  ///////////////exposing all functions///////////////////////////
  return {
    index,
    createReg
  }
  //////////////////////////oOo//////////////////////////////////
}
/////////////////////oOo///////////////////////////////////////

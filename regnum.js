'use strict'
////////////////////module export function////////////////
module.exports = function(models) {
    /////////////////rendering a form////////////////////////
    const index = function(req, res) {

      models.lic_number.find({}, function(err, results) {
        if (err) {
          return next(err);
        } else {
          res.render('pages/index', {
            licenceNum: results
          })
        }
      })
    };
    ////////////////////////oOo////////////////////////////////

    /////////////creating registration number function//////////
    const createReg = function(req, res, next) {
      var license = req.body.registration;
      var regNum = {
        registration: license.substr(0, 2).toUpperCase() + ' ' + license.substr(
          2).toLowerCase()
      }
      if ((!regNum || !regNum.registration) || !license) {
        req.flash('error', 'Please enter Registration Number!')
        res.redirect('/')
      } else {
        models.lic_number.create(regNum, function(err, results) {
          if (err) {
            if (err.code === 11000) {
              req.flash('error',
                'You cannot add same registration number!')
              res.redirect('/')
            } else {
              return next(err)
            }
          } else {
            req.flash('success', 'Registration Number Added!')
            res.redirect('/')
          }
        })
      }
    };
    ////////////////////////////oOo///////////////////////////////

    /////////////////filtering function/////////////////////////////
    const filter = function(req, res, next) {
      var radioValue = req.body.num;
      models.lic_number.find({registration :{ $regex: radioValue, $options: "x" }}, function(err, results) {
        // var regList = [];
        // for (var i = 0; i < results.length; i++) {
        //   var mainRes = results[i];
        //   var regNumbers = mainRes.registration;
        //   if (regNumbers.startsWith(radioValue)) {
        //     regList.push(regNumbers);
        //   }
        // }
        // console.log(results);
        if (err) {
          return next(err);
        } else {
          res.render('pages/index', {
            filtered: results
          })
        }
      })
    }

    ///////////////exposing all functions///////////////////////////
    return {
      index,
      createReg,
      filter
    }
    //////////////////////////oOo//////////////////////////////////
  }
  /////////////////////oOo///////////////////////////////////////

// 'use strict'
// ////////////////////module export function////////////////
// module.exports = function(models) {
//
//   //////////empty list/////////////////////
//   const licList = [];
//
//   /////////////////rendering a form////////////////////////
//   const index = function(req, res) {
//     res.render('pages/index');
//   };
//   ////////////////////////oOo////////////////////////////////
//
//   /////////////creating registration number function//////////
//   const createReg = function(req, res) {
//     var license = req.body.registration;
//     var regNum = license.substr(0, 2).toUpperCase() + ' ' + license.substr(2).toLowerCase()
//     if (!license || license == undefined) {
//       req.flash('error', 'Please enter Registration Number!')
//       res.redirect('/')
//     } else {
//       licList.push(regNum);
//       res.render('pages/index', {
//         licenceNum: licList
//       })
//     }
//   };
//   ////////////////////////////oOo///////////////////////////////
//
//   ///////////////exposing all functions///////////////////////////
//   return {
//     index,
//     createReg
//   }
//   //////////////////////////oOo//////////////////////////////////
// }
// /////////////////////oOo///////////////////////////////////////

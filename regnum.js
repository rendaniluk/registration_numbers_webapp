'use strict'
////////////////////module export function////////////////
module.exports = function(){

  const licList = [];

  const index = function(req, res) {
    // var license = (req.params.lic).substr(0, 2).toUpperCase() + ' ' + (req.params.lic)
    //           .substr(2).toLowerCase()
    var name = req.body.name;
    res.render('pages/index');
};

const createReg = function(req, res){
  var name = req.body.name;

  if(name){
    licList.push(name);
  }
  res.render('pages/index',
{licenceNum : licList})
}


return{
index,
createReg
}

}

var exec=require('promised-exec'),
verb=require('verbo'),
Promise = require('promise');




module.exports = function(){
    return new Promise(function (resolve, reject) {
    exec(__dirname+'/network.sh').then(function(data){
      var networking=JSON.parse(data)
      resolve(networking);


    }).catch(function(err){
      reject(err)
    });
    });
  }

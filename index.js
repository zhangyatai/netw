var exec=require('promised-exec'),
getIP = require('external-ip')(),
verb=require('verbo'),
Promise = require('promise');




module.exports = function(){
    return new Promise(function (resolve, reject) {
    exec(__dirname+'/network.sh').then(function(data){
      var networking=JSON.parse(data)
      getIP(function (err, ip){
        if(err){
          verb(err,'warn','Netw, external ip error')
        }
        if(ip){
          networking.externalIp=ip
        }

        resolve(networking);

      })

    }).catch(function(err){
      reject(err)
    });
    });
  }

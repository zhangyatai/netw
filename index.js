var exec=require('promised-exec'),
verb=require('verbo'),
testInternet=require('promise-test-connection'),
Promise = require('promise');
extIP = require('external-ip');

var getIP = extIP({
  timeout: 10000
});

module.exports = function(verb){

  return new Promise(function (resolve, reject) {
    exec(__dirname+'/network.sh').then(function(data){

      var networking=JSON.parse(data);
      networking.externalIp=false;
      networking.internet=false;

      testInternet().then(function(){
        networking.internet=true;

        getIP(function (err, ip) {
          if(err){
            resolve(networking)
          } else if(!ip){
            resolve(networking)
          } else {
            networking.externalIp=ip
            resolve(networking)
          }
        })

      }).catch(function(){
        resolve(networking)
      })
    }).catch(function(err){
      reject(err)
    });
  });

}

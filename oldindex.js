var exec=require('promised-exec'),
verb=require('verbo'),
waitfor=require('waitfor-promise'),
getIP = require('external-ip'),
Promise = require('promise');





module.exports = function(verb){
  verbose=false
  if (verb){
    verbose=true
  }
  var Ip=false
  function getip(){
    getIP()(function (err, ip){
      if(err&&verbose){
        verb(err,'warn','Netw, external ip error')
      } else if(ip){
        Ip=ip
      }
    })
  }

  getip();

  var eip=function(){
    return new Promise(function (resolve, reject) {
      if(Ip){
        resolve(Ip)
      } else{
        getip();
        reject('no ip')

      }
    })
  }

    return new Promise(function (resolve, reject) {
    exec(__dirname+'/network.sh').then(function(data){
      var networking=JSON.parse(data)


waitfor.pre(eip,{
  time:1800,
timeout:4000,
verbose:false
}).then(function(answer){
  networking.externalIp=answer;
  resolve(networking)
}).catch(function(err){
  if(verbose){
    verb(err,'warn','netw')
  }
  resolve(networking)
});

    }).catch(function(err){
      reject(err)
    });
    });
  }

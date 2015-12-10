var exec=require('promised-exec'),
verb=require('verbo'),
network=require('network'),
Promise = require('promise');





module.exports = function(verb){

    return new Promise(function (resolve, reject) {
    exec(__dirname+'/network.sh').then(function(data){
      var networking=JSON.parse(data)

      networking.externalIp=false
      networking.internet=false

      network.get_active_interface(function(err, obj) {

        if(err){
          resolve(networking)
        } else if(!obj){
          resolve(networking)

        } else{
          networking.default=obj
          network.get_public_ip(function(err, ip) {

            if(err){
              resolve(networking)
            } else if(!ip){
              resolve(networking)

            } else {
              networking.externalIp=ip
              networking.internet=true
              resolve(networking)

            }

          })
        }
    })





    }).catch(function(err){
      reject(err)
    });
    });
  }

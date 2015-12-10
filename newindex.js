var verb=require('verbo'),
//exec=require('promised-exec'),
network=require('network'),
wifiscanner = require('node-wifiscanner'),
Promise = require('promise');





module.exports = function(verb){
  verbose=false
  if (verb){
    verbose=true
  }
var networks=false

var object={
  networks:false,
  network:false,
  externalIp:false
}

    return new Promise(function (resolve, reject) {

      network.get_interfaces_list(function(err, list) {

if(err){
  reject(err)
} else if(!list){
  reject('no networks')

} else{
  object.networks=list

  network.get_active_interface(function(err, obj) {

    if(err){
      resolve(object)
    } else if(!obj){
      resolve(object)

    } else{
      object.network=obj
      network.get_public_ip(function(err, ip) {

        if(err){
          resolve(object)
        } else if(!ip){
          resolve(object)

        } else {
          object.externalIp=ip
          resolve(object)

        }

      })
    }
})

}
})




    });
  }

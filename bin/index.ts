var netw = require("../lib/index");
netw().then(function(d){
        console.log(d);
}).catch(function(err){
    console.log(err);
});
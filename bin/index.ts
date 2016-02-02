import netw = require("../lib/index");

netw().then(function(d){
        console.log(JSON.stringify(d));
}).catch(function(err){
    console.log(err);
});
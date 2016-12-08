import netw from "../index"

netw().then(function(d){
        console.log(JSON.stringify(d));
}).catch(function(err){
    console.log(err);
});
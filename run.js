var netw=require('./index'),
verb=require("verbo");

netw().then(function(doc){

if(doc){


verb(doc,"debug","Netw");


} else{
  verb("data problems","error","Netw");
}
})

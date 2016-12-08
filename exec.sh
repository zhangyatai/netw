#!/usr/bin/env node

var child_process = require('child_process')

child_process.exec('node '+__dirname+'/exec/index', function(err,stdout,stderr){

if (err) {
console.log(err)
} else {
    console.log(stdout.relpace(/ /g,''))
}

})
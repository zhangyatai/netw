#!/usr/bin/env node

"use strict";

var index_1 = require("./index");
index_1.default().then(function (d) {
    console.log(JSON.stringify(d));
}).catch(function (err) {
    console.log(err);
});
import * as child_process from "child_process";
import * as Promise from "bluebird";


export = function(e: void) {

    return new Promise(function(resolve, reject) {
                let callbacked = false;
        child_process.exec(__dirname + "/../scripts/linux/network.sh",
            function(error, stdout, stderr) {
                callbacked=true;
                if (error && error !== null) {
                    reject(error);
                } else if (stderr) {
                    reject(stderr);
                } else {
                    resolve(JSON.parse(stdout+""));
                }

            });
            
            
                    setTimeout(function() {
            if (!callbacked) {
                     reject("timeout error");
            }
        }, 50000)
            

    });
};



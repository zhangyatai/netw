import * as child_process from "child_process";
import * as Promise from "bluebird";


export = function(e: void) {

    return new Promise(function(resolve, reject) {
                let callbacked = false;
                
                            
                    let timo = setTimeout(function() {
            if (!callbacked) {
                     reject("timeout error");
            }
        }, 50000)
            
                
        child_process.exec(__dirname + "/../scripts/linux/network.sh",
            function(error, stdout, stderr) {
                callbacked=true;
                clearTimeout(timo);
                if (error && error !== null) {
                    reject(error);
                } else if (stderr) {
                    reject(stderr);
                } else {
                    resolve(JSON.parse(stdout+""));
                }

            });
            


    });
};



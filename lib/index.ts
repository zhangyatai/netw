import child_process = require("child_process");
import Promise = require("bluebird");


export = function(e: any) {

    return new Promise(function(resolve, reject) {
        child_process.exec(__dirname + "/../scripts/linux/network.sh",
            function(error, stdout, stderr) {
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



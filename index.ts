import * as child_process from "child_process";
import * as Promise from "bluebird";

interface Scan {
    essid: string;
    mac: string;
    signal: string;
}

interface Network {
    type: string;
    mac: string;
    interface: string;
    essid?: string;
    scan?: Scan[];
    ip?: string;
    gateway?: string;
}

export default function netw() {

    return new Promise<Network[]>(function(resolve, reject) {
        let callbacked = false;
        let timo = setTimeout(function() {
            if (!callbacked) {
                reject("timeout error");
            }
        }, 20000);

        child_process.exec(__dirname + "/scripts/linux/network.sh",
            function(error, stdout, stderr) {
                callbacked = true;
                clearTimeout(timo);
                if (error && error !== null) {
                    reject(error);
                } else if (stderr) {
                    reject(stderr);
                } else {
                    resolve(JSON.parse(stdout.toString()));
                }

            });



    });
};



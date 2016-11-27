import * as child_process from "child_process";
import * as Promise from "bluebird";

interface IScan {
    essid: string;
    mac: string;
    signal: string;
}

type INetworkType = 'wifi' | 'wired'

interface INetwork {
    type: INetworkType;
    mac: string;
    interface: string;
    essid?: string;
    scan?: IScan[];
    ip?: string;
    gateway?: string;
}

export default function netw() {

    return new Promise<INetwork[]>(function(resolve, reject) {
        let callbacked = false;
        const timo = setTimeout(function() {
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



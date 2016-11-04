import netw from '../index'
import * as chai from 'chai'


const expect = chai.expect;
let networking;


    before(function (done) {
            this.timeout(15000);

        netw().then(function (data) {
            networking = data
            done()
        }).catch((err) => {
            console.log("error",err)
            done()
        });
    });


// write tests about multiple values (2 ip or 2 gateway for the same interface)
describe("netw object", function () {




    it("should return an object", function () {
        expect(networking).to.be.ok;
    });

    it("contains an array of networks", function () {
        expect(networking).to.be.an('array');
    });



    describe("network entry", function () {

        it("network structure contains interface, type and mac", function () {
            for (var i = 0; i < networking.length; i++) {
                expect(networking[i]).to.have.property('interface').to.be.a('string');
                expect(networking[i]).to.have.property('type').to.be.a('string');
                expect(networking[i]).to.have.property('mac').to.be.a('string');
                var options = ['wifi', 'wired'];
                expect(options).to.include(networking[i].type);
            }
        });

        it("validate type of interface for API compatibility", function () {
            var options = ['wifi', 'wired'];
            for (var i = 0; i < networking.length; i++) {
                expect(options).to.include(networking[i].type);
            }
        });

        describe("wifi property (if wifi device is present on your computer", function () {

            it("wifi networks scan", function () {
                for (var i = 0; i < networking.length; i++) {
                    if (networking[i].type == 'wifi') {
                        expect(networking[i]).to.have.property('scan').to.be.an('array');
                    }
                }
            });

            it("check essid if present", function () {
                for (var i = 0; i < networking.length; i++) {
                    if (networking[i].type == 'wifi' && networking[i].gateway, networking[i].essid) {
                        expect(networking[i]).to.have.property('essid').to.be.a('string');
                    }
                }
            });

        });

    });

});

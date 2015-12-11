var netw=require('../index'),
expect=require('chai').expect;


describe("netw object", function(){
  this.timeout(50000);

  before(function() {
    return netw().then(function(data) {
      networking=data
    });
  });


  it("should return an object", function(){
    expect(networking).to.be.ok;
  });

  it("contains an array of networks", function(){
    expect(networking).to.have.property('networks').that.is.an('array');
  });

  it("contains external ip", function(){
    expect(networking).to.have.property('externalIp').to.exist;
  });

  it("contains connected boolean status", function(){
    expect(networking).to.have.property('internet').to.be.a('boolean');
  });

  describe("network entry", function(){

    it("network structure contains interface, type and mac", function(){
      for(var i=0;i<networking.networks.length;i++){
        expect(networking.networks[i]).to.have.property('interface').to.be.a('string');
        expect(networking.networks[i]).to.have.property('type').to.be.a('string');
        expect(networking.networks[i]).to.have.property('mac').to.be.a('string');
        var options=['wifi','wired'];
        expect(options).to.include(networking.networks[i].type);
      }
    });

    it("validate type of interface for API compatibility", function(){
      var options=['wifi','wired'];
      for(var i=0;i<networking.networks.length;i++){
        expect(options).to.include(networking.networks[i].type);
      }
    });

    describe("wifi property (if wifi device is present on your computer", function(){

      it("wifi networks scan", function(){
        for(var i=0;i<networking.networks.length;i++){
          if(networking.networks[i].type=='wifi'){
            expect(networking.networks[i]).to.have.property('scan').to.be.an('array');
          }
        }
      });

      it("check essid if present", function(){
        for(var i=0;i<networking.networks.length;i++){
          if(networking.networks[i].type=='wifi' && networking.networks[i].gateway,networking.networks[i].essid){
            expect(networking.networks[i]).to.have.property('essid').to.be.a('string');
          }
        }
      });
      
    });

  });

});

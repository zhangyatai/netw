var netw=require('../index'),
expect=require('chai').expect;


describe("netw object", function(){
  this.timeout(50000);

  before(function() {
    return netw().then(function(data) {
      networking=data
    });
  });


  it("should return", function(){
    expect(networking).to.be.ok;
  });

  it("contains an array of networks", function(){
    expect(networking).to.have.property('networks').that.is.an('array');
  });

  it("contains an array of routes", function(){
    expect(networking).to.have.property('routes').that.is.an('array');
  });

  it("contains default network", function(){
    expect(networking).to.have.property('default').that.is.an('object');
  });

  it("contains external ip", function(){
    expect(networking).to.have.property('externalIp').to.exist;
  });

  it("contains connected boolean status", function(){
    expect(networking).to.have.property('internet').to.be.a('boolean');
  });

  describe("network", function(){
  it("network structure contains interface, type and mac", function(){
    if(networking[0]){
    expect(networking[0]).to.have.property('interface').to.be.a('string');
    expect(networking[0]).to.have.property('type').to.be.a('string');
    expect(networking[0]).to.have.property('mac').to.be.a('string');
    }
  });
  });

});

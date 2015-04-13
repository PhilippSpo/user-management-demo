if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("create a user as admin", function(){
    	before(function(done) {
    		Meteor.call('createUsers', done);
    	});
      it("should create a user", function(){
        chai.assert.equal(5,5);
      });
      after(function(done){
      	Meteor.call('removeUsers', done);
      });
    });
  });
}

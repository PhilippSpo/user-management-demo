if (!(typeof MochaWeb === 'undefined')) {
	MochaWeb.testOnly(function() {
		describe("createUser", function() {
			describe("admins may create users", function() {
				before(function(done) {
					Meteor.loginWithPassword('admin', 'admin', done);
				});
				it('user with no admin role should not be able to create other users', function(done) {

					Meteor.users.insert({
						username: 'test',
						emails: [{
							address: 'test@test.com',
							verified: false
						}],
						profile: {
							fullname: 'test'
						}
					}, function(err, id){
						Meteor.call('deleteUser', id);
						done(err);
					});
				});
				after(function() {
					Meteor.logout();
				});
			});
			describe("superAdmins may create users", function() {
				before(function(done) {
					Meteor.loginWithPassword('superAdmin', 'superAdmin', done);
				});
				it('user with no admin role should not be able to create other users', function(done) {

					Meteor.users.insert({
						username: 'test',
						emails: [{
							address: 'test@test.com',
							verified: false
						}],
						profile: {
							fullname: 'test'
						}
					}, function(err, id){
						Meteor.call('deleteUser', id);
						done(err);
					});
				});
				after(function() {
					Meteor.logout();
				});
			});
			describe("non-admin users may not create users", function() {
				before(function(done) {
					Meteor.loginWithPassword('normal', 'normal', done);
				});
				it('user with no admin role should not be able to create other users', function(done) {

					Meteor.users.insert({
						username: 'test',
						emails: [{
							address: 'test@test.com',
							verified: false
						}],
						profile: {
							fullname: 'test'
						}
					}, function(err, id) {

						if(id){
							Meteor.call('deleteUser', id);
						}
						if (!err) {
							done(new Error('Fail: Users without admin role are able to create other users'));
						} else {
							done();
						}

					});
				});
				after(function() {
					Meteor.logout();
				});
			});
		});
	});
}
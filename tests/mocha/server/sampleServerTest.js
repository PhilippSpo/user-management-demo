Meteor.methods({
	createUsers: function() {
		// createUsers();
	},
	removeUsers: function() {
	}
})

function createUsers() {
	var users = [
		{
			username: 'superadmin',
			email: 'superadmin@superadmin.de',
			roles: ['superadmin'],
			password: 'superadmin',
			profile: {
				fullname: 'superadmin'
			}
		},
		{
			username: 'admin',
			email: 'admin@admin.de',
			roles: ['admin'],
			password: 'admin',
			profile: {
				fullname: 'admin'
			}
		},
		{
			username: 'user',
			email: 'user@user.de',
			roles: ['user'],
			password: 'user',
			profile: {
				fullname: 'user'
			}
		}
	];
	_.each(users, function(user) {
		Accounts.createUser(user);
	})
}
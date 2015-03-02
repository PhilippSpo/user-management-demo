Template.addUserToolbar.events({
	'tap #createUser': UserManagementPolymer.submitCreateUserForm,
	'tap #goBack': function () {
		Router.go('umShowUsers');
	}
});
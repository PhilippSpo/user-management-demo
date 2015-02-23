Template.addUser.events({
	'click #createUser': UserManagementPolymer.submitCreateUserForm,
	'click #goBack': function () {
		Router.go('umShowUsers');
	}
});
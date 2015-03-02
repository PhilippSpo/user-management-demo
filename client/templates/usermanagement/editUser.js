Template.editUserToolbar.events({
	'tap .goToUserDetail': function () {
		Router.go('umShowUser', {
			userId: Router.current().params.userId
		});
	},
	'tap #saveUser': function(event, template) {
		UserManagementPolymer.submitEditUserForm(event, template);
	},
});
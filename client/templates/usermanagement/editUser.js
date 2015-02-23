Template.editUser.events({
	'click .goToUserDetail': function () {
		Router.go('umShowUser', {
			userId: Router.current().params.userId
		});
	},
	'click #saveUser': function(event, template) {
		UserManagementPolymer.submitEditUserForm(event, template);
	},
});
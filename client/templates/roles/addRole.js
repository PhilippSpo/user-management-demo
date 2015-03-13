Template.addRoleToolbar.events({
	'tap .goBack': function () {
		Router.go('umManageRoles');
	},
	'tap #createRole': function(e, template) {
		UserManagementPolymer.submitCreateRoleForm(e, template);
	}
});
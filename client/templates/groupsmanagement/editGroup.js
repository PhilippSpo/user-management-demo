Template.editGroupToolbar.events({
	'tap .goBack': function () {
		Router.go('umShowGroup', {
			groupId: Router.current().params.groupId
		});
	},
	'tap .saveGroup': function () {
		UserManagementPolymer.submitEditGroupForm(event, template);
	}
});

Template.editGroup.helpers({
	group: function () {
		return TAPi18n.__('group');
	}
});
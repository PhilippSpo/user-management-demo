Template.editGroup.events({
	'click .goBack': function () {
		Router.go('umShowGroup', {
			groupId: Router.current().params.groupId
		});
	},
	'click .saveGroup': function () {
		UserManagementPolymer.submitEditGroupForm(event, template);
	}
});

Template.editGroup.helpers({
	group: function () {
		return TAPi18n.__('group');
	}
});
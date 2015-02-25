Template.showGroup.events({
	'click .goBack': function () {
		Router.go('umShowGroups');
	},
	'click .editGroup': function () {
		Router.go('umEditGroup', {
			groupId: Router.current().params.groupId
		});
	}
});

Template.showGroup.helpers({
	group: function () {
		return TAPi18n.__('group');
	}
});
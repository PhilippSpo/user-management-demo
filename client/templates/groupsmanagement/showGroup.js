Template.showGroup.rendered = function () {	
	Session.set('globalFabVisible', true);
};

Template.showGroupToolbar.events({
	'tap .goBack': function () {
		Router.go('umShowGroups');
	},
	'tap .editGroup': function () {
		Router.go('umEditGroup', {
			groupId: Router.current().params.groupId
		});
	}
});

Template.showGroupToolbar.helpers({
	group: function () {
		return TAPi18n.__('group');
	}
});
Template.deleteGroup.events({
	'tap #deleteGroup': function(e) {
		Meteor.call('removeGroup', Router.current().params.groupId, function(error, result) {
			if (!error) {
				// show message
				Router.go('umShowGroups');
				GlobalUI.toast(TAPi18n.__('groupRemoved'));
			}else{
				GlobalUI.toast(error.message);
			}
		});
	}
});
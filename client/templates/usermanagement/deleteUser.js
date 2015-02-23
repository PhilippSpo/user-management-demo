Template.deleteUser.events({
	'tap #deleteUser': function() {
		Meteor.call('removeUser', Router.current().params.userId, function(error, result) {
			if (!error) {
				// show message
				Router.go('umShowUsers');
				GlobalUI.toast("Nutzer wurde entfernt");
			}
		});
	}
});
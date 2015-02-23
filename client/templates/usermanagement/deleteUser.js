Template.deleteUser.events({
	'tap #deleteUser': function(e) {
		Meteor.call('removeUser', Router.current().params.userId, function(error, result) {
			if (!error) {
				// show message
				Router.go('umShowUsers');
				GlobalUI.toast("Nutzer wurde entfernt");
			}
		});
	}
});

// Template.deleteUser.rendered = function () {
// 	this.find('#deleteUser').addEventListener('click', function(e) {
// 		Meteor.call('removeUser', Router.current().params.userId, function(error, result) {
// 			if (!error) {
// 				// show message
// 				Router.go('umShowUsers');
// 				GlobalUI.toast("Nutzer wurde entfernt");
// 			}
// 		});
// 	});
// };
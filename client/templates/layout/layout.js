Template.layout.events({
	'tap [data-action=sign-in]': function() {
		Router.go('atSignIn');
	},
	'tap [data-action=sign-out]': function(e) {
		e.preventDefault();
		Meteor.logout(function() {
			Router.go('atSignIn');
		});
	},
	'tap [data-action=showUsers]': function() {
		Router.go('umShowUsers');
	},
	'tap [data-action=showGroups]': function() {
		Router.go('umShowGroups');
	}
});
Template.publicHeaderItems.events({
	'click [data-action=sign-in]': function () {
		Router.go('atSignIn');
	},'click [data-action=sign-out]': function (e) {
		e.preventDefault();
		Meteor.logout(function() {
			Router.go('atSignIn');
		});
	},
	'click [data-action=showUsers]': function () {
		Router.go('umShowUsers');
	},
	'click [data-action=showGroups]': function () {
		Router.go('umShowGroups');
	}
});
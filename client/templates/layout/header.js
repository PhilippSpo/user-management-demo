Template.publicHeaderItems.events({
	'click [data-action=sign-in]': function () {
		Router.go('atSignIn');
	},'click [data-action=sign-out]': function () {
		Meteor.logout(function() {
			Router.go('atSignIn');
		});
	}
});
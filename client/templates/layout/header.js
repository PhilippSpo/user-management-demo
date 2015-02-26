Template.publicHeaderItems.events({
	'click [data-action=sign-in]': function () {
		Router.go('atSignIn');
	},
	'click [data-action=sign-out]': function () {
		Meteor.logout(function() {
			Router.go('atSignIn');
		});
	}
});

Template.language.events({
	'click [data-action=english]': function () {
		TAPi18n.setLanguage('en')
			.done(function() {
				UserManagementTemplates.setupSchemaMessages();
			});
	},
	'click [data-action=german]': function () {
		TAPi18n.setLanguage('de')
			.done(function() {
				UserManagementTemplates.setupSchemaMessages();
			});
	}
});
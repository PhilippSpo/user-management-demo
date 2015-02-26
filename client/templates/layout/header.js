Template.publicHeaderItems.events({
	'click [data-action=sign-in]': function() {
		Router.go('atSignIn');
	},
	'click [data-action=sign-out]': function(e) {
		e.preventDefault();
		Meteor.logout(function() {
			Router.go('atSignIn');
		});
	},
	'click [data-action=showUsers]': function() {
		Router.go('umShowUsers');
	},
	'click [data-action=showGroups]': function() {
		Router.go('umShowGroups');
	}
});

Template.language.events({
	'click [data-action=english]': function() {
		TAPi18n.setLanguage('en')
			.done(function() {
				UserManagementTemplates.setupSchemaMessages();
			});
	},
	'click [data-action=german]': function() {
		TAPi18n.setLanguage('de')
			.done(function() {
				UserManagementTemplates.setupSchemaMessages();
			});
	}
});
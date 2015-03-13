Template.layout.helpers({
	activeSearch: function(e, template) {
		return UmUi.activeSearch.get();
	}
});
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
	},
	'tap [data-action=manageRoles]': function() {
		Router.go('umManageRoles');
	},
	'tap [data-action=english]': function() {
		T9n.setLanguage('en');
		TAPi18n.setLanguage('en')
			.done(function() {
				UserManagementTemplates.setupSchemaMessages();
			});
	},
	'tap [data-action=german]': function() {
		T9n.setLanguage('de');
		TAPi18n.setLanguage('de')
			.done(function() {
				UserManagementTemplates.setupSchemaMessages();
			});
	},
	'keyup #search': function(e, template) {
		Template.layout.searchHandler(e, template);
	}
});
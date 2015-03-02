Template.language.events({
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
	}
});
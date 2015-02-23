UserManagementTemplates.configureRoute('showUsers');
UserManagementTemplates.configureRoute('showUser', {
	template: 'showUser'
});
UserManagementTemplates.configureRoute('editUser', {
	template: 'editUser'
});
UserManagementTemplates.configureRoute('addUser', {
	template: 'addUser'
});

AccountsTemplates.configureRoute('signIn');

UserManagementPolymer.setHeaderPanelId('hPanel');

Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/', {
	name: 'welcome',
	action: function() {
		Router.go('/showUsers');
	}
});

if (Meteor.isClient) {
	Meteor.startup(function() {

		TAPi18n.setLanguage('de')
			.done(function() {
			})
			.fail(function(error_message) {
				// Handle the situation
				console.log(error_message);
			});
	});
}
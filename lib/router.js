UserManagementTemplates.configureRoute('showUsers');
UserManagementTemplates.configureRoute('showUser', {
	template: 'showUser'
});
UserManagementTemplates.configureRoute('editUser',{
	template: 'editUser'
});
UserManagementTemplates.configureRoute('addUser', {
	template: 'addUser'
});

//UserManagementPolymer.setHeaderPanelId('hPanel');

Router.configure({
    layoutTemplate: 'layout',
});

Router.route('/', {
    name: 'welcome',
    action: function() {
        Router.go('umShowUsers');
    }
});
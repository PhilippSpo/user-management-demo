Router.route('/', {
    name: 'welcome',
    layoutTemplate: 'layout',
    action: function() {
    	UserManagementPolymer.setHeaderPanelId('hPanel');
        this.render('welcome');
    }
});

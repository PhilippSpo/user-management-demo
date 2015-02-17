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

UserManagementPolymer.setHeaderPanelId('hPanel');

Router.configure({
    layoutTemplate: 'layout',
});

Router.route('/', {
    name: 'welcome',
    action: function() {
        Router.go('umShowUsers');
    }
});

Router.route('/editUserp/:userId', {
    name: 'editUserp',
    template: 'welcome',
    action: function() {
        //Router.go('createUser');
        this.render('editUserp');
    }
});

Router.route('/createUser', {
    name: 'createUser',
    template: 'welcome',
    action: function() {
        //Router.go('createUser');
        this.render('createUser');
    }
});

Router.route('/showUsersp', {
    name: 'showUsersp',
    template: 'welcome',
    action: function() {
        //Router.go('createUser');
        this.render('showUsersp');
    }
});

Router.route('/showUserp/:userId', {
    name: 'showUserp',
    template: 'welcome',
    action: function() {
        //Router.go('createUser');
        this.render('showUserp');
    }
});
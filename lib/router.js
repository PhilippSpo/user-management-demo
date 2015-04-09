AccountsTemplates.configure({
	sendVerificationEmail: true,
	showForgotPasswordLink: true,
	defaultLayout: 'layout',
	defaultLayoutRegions: {
		top: 'header',
		aside: 'menu'
	},
	defaultContentRegion: 'main'
});

AccountsTemplates.configureRoute('signIn');

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('signUp');

AccountsTemplates.configureRoute('resetPwd');

AccountsTemplates.configureRoute('verifyEmail');


FlowRouter.route('/', {
	action: function(params) {
		FlowLayout.render('layout', {
			top: 'header',
			main: 'main',
			//aside: 'menu'
		});
	}
});

FlowRouter.route('/users', {
	subscriptions: function(params) {
		this.register('users', Meteor.subscribe('users'));
	},
	action: function(params) {
		FlowLayout.render('layout', {
			top: 'header',
			main: 'umShowUsers',
			//aside: 'menu',
			sidebar: ''
		});
		Session.set("sidebar", false);
	}
});

FlowRouter.route('/users/show/:userId', {
	subscriptions: function(params) {
		this.register('users', Meteor.subscribe('users'));
	},
	action: function(params) {
		FlowLayout.render('layout', {
			top: 'header',
			main: 'umShowUsers',
			//aside: 'menu',
			sidebar: 'sideBarElement',

		});
		Session.set("sidebar", true);
		Session.set("edit", false);
	}
});

FlowRouter.route('/users/edit/:userId', {
	subscriptions: function(params) {
		this.register('users', Meteor.subscribe('users'));
	},
	action: function(params) {
		FlowLayout.render('layout', {
			top: 'header',
			main: 'umShowUsers',
			//aside: 'menu',
			sidebar: 'sideBarElement',
			modal: 'umAddUser'
		});
		Session.set("sidebar", true);
		Session.set("edit", true);
	}
});
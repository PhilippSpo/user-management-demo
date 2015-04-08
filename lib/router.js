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
			aside: 'menu'
		});
	}
});

FlowRouter.route('/showUsers', {
	subscriptions: function(params) {
		this.register('users', Meteor.subscribe('users'));
	},
	action: function(params) {
		FlowLayout.render('layout', {
			top: 'header',
			main: 'umShowUsers',
			aside: 'menu'
		});
		Session.set("currentUser","");
		$('#pagination').addClass("l12");
		$('#pagination').removeClass("l8");
		$('#sidebar').addClass("hide");
		$('#sidebar').removeClass('col l4 z-depth-2');
	}
});
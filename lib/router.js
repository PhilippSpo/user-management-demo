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
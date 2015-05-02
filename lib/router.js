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
	action: function() {
		if(Meteor.user()){
			FlowRouter.go('/users');
		}else{
			FlowRouter.go('/sign-in');
		}
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
			sidebar: '',
			modal: 'umAddUser'
		});
		Session.set("sidebar", false);
		Session.set("mode", "users");
	},
	name: "users"
});

FlowRouter.route('/users/show/:userId', {
	subscriptions: function(params) {
		this.register('users', Meteor.subscribe('users'));
	},
	action: function(params) {
		Session.set("sidebar", true);
		Session.set("edit", false);
		Session.set("mode", "users");

		var mq = window.matchMedia('all and (max-width: 600px)');
		function resize(){
			if(mq.matches) {
				FlowLayout.render('layout', {
					top: 'header',
					main: 'sideBarElement',
					smodal: 'umAddUser'

				});
				Session.set("mobile", true);
				$('#sidebar').removeClass("z-depth-2");
				$('#closeIcon').removeClass("mdi-navigation-close");
				$('#closeIcon').addClass("mdi-navigation-arrow-back");
			} else {
				FlowLayout.render('layout', {
					top: 'header',
					main: 'umShowUsers',
					sidebar: 'sideBarElement',
					smodal: 'umAddUser'

				});
				Session.set("mobile", false);
				$('#sidebar').addClass("z-depth-2");
				$('#closeIcon').removeClass("mdi-navigation-arrow-back");
				$('#closeIcon').addClass("mdi-navigation-close");
			}
		}
		window.addEventListener ('resize', resize, true);

		resize();
	}
});

FlowRouter.route('/users/edit/:userId', {
	subscriptions: function(params) {
		this.register('users', Meteor.subscribe('users'));
	},
	action: function(params) {
		Session.set("sidebar", true);
		Session.set("edit", true);
		Session.set("mode", "users");

		var mq = window.matchMedia('all and (max-width: 600px)');
		function resize(){
			if(mq.matches) {
				FlowLayout.render('layout', {
					top: 'header',
					main: 'sideBarElement',
					smodal: 'umAddUser'

				});
				Session.set("mobile", true);
				$('#sidebar').removeClass("z-depth-2");
				$('#closeIcon').removeClass("mdi-navigation-close");
				$('#closeIcon').addClass("mdi-navigation-arrow-back");
			} else {
				FlowLayout.render('layout', {
					top: 'header',
					main: 'umShowUsers',
					sidebar: 'sideBarElement',
					smodal: 'umAddUser'

				});
				Session.set("mobile", false);
				$('#sidebar').addClass("z-depth-2");
				$('#closeIcon').removeClass("mdi-navigation-arrow-back");
				$('#closeIcon').addClass("mdi-navigation-arrow-back");
			}
		}
		window.addEventListener ('resize', resize, true);

		resize();
	}
});

FlowRouter.route('/groups', {
	subscriptions: function(params) {
		this.register('groups', Meteor.subscribe('groups'));
	},
	action: function(params) {
		FlowLayout.render('layout', {
			top: 'header',
			main: 'umShowGroups',
			//aside: 'menu',
			sidebar: '',
			modal: 'umAddGroup'
		});
		Session.set("sidebar", false);
		Session.set("mode", "groups");
	},
	name: "groups"
});

FlowRouter.route('/groups/show/:groupId', {
	subscriptions: function(params) {
		this.register('groups', Meteor.subscribe('groups'));
	},
	action: function(params) {
		Session.set("sidebar", true);
		Session.set("edit", false);
		Session.set("mode", "groups");

		var mq = window.matchMedia('all and (max-width: 600px)');
		function resize(){
			if(mq.matches) {
				FlowLayout.render('layout', {
					top: 'header',
					main: 'sideBarElementGroup',
					//aside: 'menu',
					//sidebar: 'sideBarElement',
					modal: 'umAddGroup'

				});
				Session.set("mobile", true);
				$('#sidebar').removeClass("z-depth-2");
				$('#closeIcon').removeClass("mdi-navigation-close");
				$('#closeIcon').addClass("mdi-navigation-arrow-back");
			} else {
				FlowLayout.render('layout', {
					top: 'header',
					main: 'umShowGroups',
					//aside: 'menu',
					sidebar: 'sideBarElementGroup',
					modal: 'umAddGroup'

				});
				Session.set("mobile", false);
				$('#sidebar').addClass("z-depth-2");
				$('#closeIcon').removeClass("mdi-navigation-arrow-back");
				$('#closeIcon').addClass("mdi-navigation-close");
			}
		}
		window.addEventListener ('resize', resize, true);

		resize();
	}
});

FlowRouter.route('/groups/edit/:groupId', {
	subscriptions: function(params) {
		this.register('groups', Meteor.subscribe('groups'));
	},
	action: function(params) {
		Session.set("sidebar", true);
		Session.set("edit", true);
		Session.set("mode", "groups");

		var mq = window.matchMedia('all and (max-width: 600px)');
		function resize(){
			if(mq.matches) {
				console.log("mobile");
				FlowLayout.render('layout', {
					top: 'header',
					main: 'sideBarElementGroup',
					modal: 'umAddGroup'

				});
				Session.set("mobile", true);
				$('#sidebar').removeClass("z-depth-2");
				$('#closeIcon').removeClass("mdi-navigation-close");
				$('#closeIcon').addClass("mdi-navigation-arrow-back");
			} else {
				console.log("desktop");
				FlowLayout.render('layout', {
					top: 'header',
					main: 'umShowGroups',
					sidebar: 'sideBarElementGroup',
					modal: 'umAddGroup'

				});
				Session.set("mobile", false);
				$('#sidebar').addClass("z-depth-2");
				$('#closeIcon').removeClass("mdi-navigation-arrow-back");
				$('#closeIcon').addClass("mdi-navigation-arrow-back");
			}
		}
		window.addEventListener ('resize', resize, true);

		resize();
	}
});

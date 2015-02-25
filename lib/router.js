// users
UserManagementTemplates.configureRoute('showUsers', {
	template: 'showUsers'
});
UserManagementTemplates.configureRoute('showUser', {
	template: 'showUser'
});
UserManagementTemplates.configureRoute('editUser', {
	template: 'editUser'
});
UserManagementTemplates.configureRoute('addUser', {
	template: 'addUser'
});
// groups
UserManagementTemplates.configureRoute('showGroups', {
	template: 'showGroups'
});
UserManagementTemplates.configureRoute('showGroup', {
	template: 'showGroup'
});
UserManagementTemplates.configureRoute('editGroup', {
	template: 'editGroup'
});
UserManagementTemplates.configureRoute('addGroup', {
	template: 'addGroup'
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');

UserManagementPolymer.setHeaderPanelId('hPanel');

if (Meteor.isClient) {
	// User Detail - Edit User
	Transitioner.transition({
		fromRoute: 'umShowUser',
		toRoute: 'umEditUser',
		velocityAnimation: { in : 'transition.pushRightIn',
			out: 'transition.pushLeftOut'
		}
	});
	Transitioner.transition({
		fromRoute: 'umEditUser',
		toRoute: 'umShowUser',
		velocityAnimation: { in : 'transition.pushLeftIn',
			out: 'transition.pushRightOut'
		}
	});
	// User List - User Detail
	Transitioner.transition({
		fromRoute: 'umShowUsers',
		toRoute: 'umShowUser',
		velocityAnimation: { in : 'transition.pushRightIn',
			out: 'transition.pushLeftOut'
		}
	});
	Transitioner.transition({
		fromRoute: 'umShowUser',
		toRoute: 'umShowUsers',
		velocityAnimation: { in : 'transition.pushLeftIn',
			out: 'transition.pushRightOut'
		}
	});
	// Group Detail - Edit Group
	Transitioner.transition({
		fromRoute: 'umShowGroup',
		toRoute: 'umEditGroup',
		velocityAnimation: { in : 'transition.pushRightIn',
			out: 'transition.pushLeftOut'
		}
	});
	Transitioner.transition({
		fromRoute: 'umEditGroup',
		toRoute: 'umShowGroup',
		velocityAnimation: { in : 'transition.pushLeftIn',
			out: 'transition.pushRightOut'
		}
	});
	// Group List - Group Detail
	Transitioner.transition({
		fromRoute: 'umShowGroups',
		toRoute: 'umShowGroup',
		velocityAnimation: { in : 'transition.pushRightIn',
			out: 'transition.pushLeftOut'
		}
	});
	Transitioner.transition({
		fromRoute: 'umShowGroup',
		toRoute: 'umShowGroups',
		velocityAnimation: { in : 'transition.pushLeftIn',
			out: 'transition.pushRightOut'
		}
	});
	// Default
	Transitioner.default({ in : 'transition.fadeIn',
		out: 'transition.fadeOut'
	});
}

Router.configure({
	layoutTemplate: 'layout',
	autoRender: false,
	autoStart: false
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
			.done(function() {})
			.fail(function(error_message) {
				// Handle the situation
				console.log(error_message);
			});
	});
}
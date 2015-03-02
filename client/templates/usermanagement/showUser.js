Template.showUserToolbar.events({
	'tap .editUser': function () {
		Router.go('umEditUser',{
			userId: Router.current().params.userId
		});
	},
	'tap .goToUsers': function () {
		Router.go('umShowUsers');
	}
});
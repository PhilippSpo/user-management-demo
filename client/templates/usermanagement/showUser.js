Template.showUser.events({
	'click .editUser': function () {
		Router.go('umEditUser',{
			userId: Router.current().params.userId
		});
	},
	'click .goToUsers': function () {
		Router.go('umShowUsers');
	}
});
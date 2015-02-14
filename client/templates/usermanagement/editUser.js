Template.editUser.events({
	'click .goToUserDetail': function () {
		Router.go('umShowUser', {
			userId: Router.current().params.userId
		});
	}
});
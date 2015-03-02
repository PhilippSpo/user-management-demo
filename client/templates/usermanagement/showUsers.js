Template.showUsersToolbar.events({
	'tap #showMenu': function(e, template) {
		document.getElementById('coreDrawer').togglePanel();
	},
	'tap .searchUsers': function(e, template) {
		Session.set('activeUmSearch', true);
	}
});

Template.showUsersToolbar.rendered = function () {
	Template.layout.searchHandler = UserManagementPolymer.userSearchHandler;
};
Template.search.events({
	'tap #clearSearch': function (e, template) {
		$(template.find('#search')).val('');
	},
	'tap #goBack': function () {
		UmUi.activeSearch.set(false);
	}
});
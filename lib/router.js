FlowRouter.route('/', {
    action: function(params) {
        FlowLayout.render('layout', {
			top: 'header',
			main: 'main',
			aside: 'menu'
		});
    }
});
Template.layout.rendered = function () {
	$(".collapse-sidenav").sideNav({
		menuWidth: 300,
		edge: 'left',
		closeOnClick: true
	});

	$(".collapse-sidenavright").sideNav({
		menuWidth: 500,
		edge: 'right',
		closeOnClick: true
	});
};
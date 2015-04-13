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

Template.layout.helpers({
	colLayout: function(){
		if(Session.get("sidebar") === true){
			return "l7 m7";
		}else{
			return "l12 m12";
		}
	}
});

Template.layout.events({
	'click #createUserButton': function(){
		$('#createuser').openModal();
	}
});

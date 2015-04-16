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
	},
	subHeaderTitle: function(){
		var name = FlowRouter.reactiveCurrent().route.name;
		if(name == "users"){
			return "Users";
		}else if(name == "groups"){
			return "Groups";
		}
	}
});

Template.layout.events({
	'click #createUserButton': function(){
		$('#createuser').openModal();
	}
});

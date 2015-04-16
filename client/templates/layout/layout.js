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
		var mode = Session.get("mode");
		if(mode == "users"){
			return "Users";
		}else if(mode == "groups"){
			return "Groups";
		}
	},
	mode: function(){
		return Session.get("mode");
	}
});

Template.layout.events({
	'click #createButton': function(){
		var mode = Session.get("mode");
		console.log(mode);
		if(mode == "users"){
			$('#createuser').openModal();
		}else if(mode == "groups"){
			$('#creategroup').openModal();
		}

	}
});

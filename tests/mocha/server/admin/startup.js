Meteor.startup(function(){
    if (!(typeof MochaWeb === 'undefined')) {
        prepareUsers();
    }
});
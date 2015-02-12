Router.route('/', {
    name: 'welcome',
    layoutTemplate: 'layout',
    action: function() {
        this.render('welcome');
    }
});

Meteor.startup(function(){
    if (!(typeof MochaWeb === 'undefined')) {
        MochaWeb.testOnly(function () {
            //prepare User
            var profile = {
                fullname: 'IAM ADMIN',
                admin: true
            };

            var user = {
                email: "admin0815@softbricks.de",
                password: "iamadmin",
                username: "admin1",
                profile: profile
            };


            var userExists = Meteor.users.findOne({'username': 'admin1'});
            if (typeof userExists === "undefined")
                Accounts.createUser(user);



            //prepare User
            var profileNotAdmin = {
                fullname: 'IAM NO ADMIN'
            };

            var userNotAdmin = {
                email: "noadmin0815@softbricks.de",
                password: "noadmin",
                username: "noadmin",
                profile: profileNotAdmin
            };


            var noAdminExists = Meteor.users.findOne({'username': 'noadmin'});
            if (typeof noAdminExists === "undefined")
                Accounts.createUser(userNotAdmin);
        });
    }
});
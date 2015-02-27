if (!(typeof MochaWeb === 'undefined')) {
    MochaWeb.testOnly(function () {

        //Tests for checkRights "Class"
        describe("Meteor.methods", function () {
            //Tests for checkUserRight function
            describe("createUserWithoutPassword admin not logged in", function () {
                it('should throw a new Meteor.Error when the user is not logged in', function () {
                    Meteor.call("createUserWithoutPassword", function (err, res) {
                        if (err) {
                            chai.assert.throws(err, Meteor.Error);
                        }
                    });
                });
            });

        });
        //User logged in but is not a admin
        describe("createUserWithoutPassword admin logged in as admin", function () {
            it('should return true when the user was created successfully', function () {
                //prepare User
                var profile = {
                    fullname: 'IAM ADMIN'
                };

                var user = {
                    email: "admin0815@softbricks.de",
                    password: "iamadmin",
                    username: "admin1",
                    profile: profile
                };


                user = Accounts.createUser(user);

                Meteor.loginWithPassword('admin1', 'iamadmin', function () {
                    console.log("login");
                    //Prepare user to insert
                    var doc = {
                        profile: {
                            fullname: 'test test',
                            admin: false,
                            superAdmin: false,
                            activated: true
                        },
                        emails: [{address: 'test@test.de', verified: false}],
                        username: 'test'
                    };

                    Meteor.call("createUserWithoutPassword", doc, function (err, res) {
                        chai.assert.isTrue(res, Meteor.Error);
                        Meteor.users.remove({_id:user});
                    });
                });
            });
        });

    });
}

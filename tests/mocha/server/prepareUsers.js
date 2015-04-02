prepareUsers = function() {

  var users = [{
    username: "normal",
    email: "normal@tutorials.com",
    roles: [],
    password: "normal",
    fullname: "Normal User"
  }, {
    username: "admin",
    email: "admin@tutorials.com",
    roles: ['admin'],
    password: "admin",
    fullname: "Admin User"
  }, {
    username: "superAdmin",
    email: "superadmin@tutorials.com",
    roles: ['superAdmin'],
    password: "superAdmin",
    fullname: "Admin User"
  }];

  _.each(users, function(user) {
    Meteor.users.remove({username: user.username});
    var id = Accounts.createUser({
      email: user.email,
      password: user.password,
      username: user.username,
      profile: {
        fullname: user.fullname
      }
    });

    if (user.roles.length > 0) {
      Roles.addUsersToRoles(id, user.roles);
    }
  });
};
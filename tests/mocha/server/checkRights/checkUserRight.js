if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function() {
    //Tests for checkRights "Class"
    // describe("checkRights", function(){
    //   //Tests for checkUserRight function
    //   describe("#checkUserRight()", function(){
    //     it('should throw a new Meteor.Error when the user is not logged in (no parameter) and no parameter is passed', function(){
    //       chai.assert.throws(checkRights.checkUserRight, Meteor.Error);
    //     });
    //   });

    //   describe("#checkUserRight('','noValidUser')", function(){
    //     it('should throw a new Meteor.Error when the user does not exist', function(){
    //       chai.assert.throws(checkRights.checkUserRight, Meteor.Error);
    //     });
    //   });

    //   describe("checkUserRight with equal user", function(){
    //     it('should return true when the user to change is the same as the current user', function(){
    //       var returnVal = checkRights.checkUserRight('equal','equal');
    //       chai.assert.isTrue(returnVal, 'The user can see and edit itself');
    //     });
    //   });

    //   describe("#checkUserRight('equal','notEqual')", function(){
    //     it('should throw a new Meteor.Error when the user to change is the not same as the current user' +
    //     'and is not a admin and not a superadmin', function(){
    //       chai.assert.throws(checkRights.checkUserRight, Meteor.Error);
    //     });
    //   });

    //   describe("checkUserRight Check user right for admin", function(){
    //     it('should return true when the user to change is the not same' +
    //     ' as the current user and the user is admin', function(){
    //       var userToInsert = {
    //         emails:[
    //               {address: 'admin@admin.de'}
    //             ],
    //         username: "admin",
    //         profile :{
    //           fullname: 'admin admin',
    //           admin:true
    //         }
    //       };
    //       var admin = Meteor.users.insert(userToInsert);
    //       var returnVal = checkRights.checkUserRight('',admin);
    //       Meteor.users.remove({username:'admin'});
    //       chai.assert.isTrue(returnVal, 'The user is a admin and is allowed to see the other user');
    //     });
    //   });

    //   describe("checkUserRight Check user right for superAdmin", function(){
    //     it('should return true when the user to change is the not same' +
    //     ' as the current user and the user is superAdmin', function(){
    //       var userToInsert = {
    //         emails:[
    //           {address: 'superAdmin@admin.de'}
    //         ],
    //         username: "superAdmin",
    //         profile :{
    //           fullname: 'admin admin',
    //           superAdmin:true
    //         }
    //       };
    //       var superAdmin = Meteor.users.insert(userToInsert);
    //       var returnVal = checkRights.checkUserRight('',superAdmin);
    //       Meteor.users.remove({username:'superAdmin'});
    //       chai.assert.isTrue(returnVal, 'The user is a superAdmin and is allowed to see the other user');
    //     });
    //   });
    // });

  });
}
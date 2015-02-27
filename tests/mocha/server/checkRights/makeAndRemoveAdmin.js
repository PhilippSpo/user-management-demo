if (!(typeof MochaWeb === 'undefined')){
    MochaWeb.testOnly(function(){
        //Tests for checkRights "Class"
        describe("checkRights", function(){
            //Tests for makeAndRemoveAdmin function
            describe("makeAndRemoveAdmin not logged in", function(){
                it('should return false when the user is not logged in (no parameter) and no parameter is passed', function(){
                    var returnVal = checkRights.makeAndRemoveAdmin();
                    chai.assert.isFalse(returnVal, 'The user is not allowed to make and remove admins');
                });
            });

            describe("makeAndRemoveAdmin no admin", function(){
                it('should return false when the user is no admin or superAdmin and himself', function(){
                    var userToInsert = {
                        emails:[
                            {address: 'wantsToMakeAdmin@admin.de'}
                        ],
                        username: "wantsToMakeAdmin",
                        profile :{
                            fullname: 'wantsToMakeAdmin wantsToMakeAdmin',
                            admin:false
                        }
                    };
                    var noAdmin = Meteor.users.insert(userToInsert);
                    var noAdminObj = Meteor.users.findOne({_id: noAdmin});
                    var returnVal = checkRights.makeAndRemoveAdmin("otherId", noAdmin, noAdminObj);
                    Meteor.users.remove({username:'wantsToMakeAdmin'});
                    chai.assert.isFalse(returnVal, 'The user is not allowed to make and remove admins');
                });
            });

            describe("makeAndRemoveAdmin no admin himself", function(){
                it('should return false when the user is no admin or superAdmin and himself', function(){
                    var userToInsert = {
                        emails:[
                            {address: 'wantsToMakeAdmin@admin.de'}
                        ],
                        username: "wantsToMakeAdmin",
                        profile :{
                            fullname: 'wantsToMakeAdmin wantsToMakeAdmin',
                            admin:false
                        }
                    };
                    var noAdmin = Meteor.users.insert(userToInsert);
                    var noAdminObj = Meteor.users.findOne({_id: noAdmin});
                    var returnVal = checkRights.makeAndRemoveAdmin(noAdmin, noAdmin, noAdminObj);
                    Meteor.users.remove({username:'wantsToMakeAdmin'});
                    chai.assert.isFalse(returnVal, 'The user is not allowed to make and remove admins');
                });
            });

            describe("makeAndRemoveAdmin admin himself", function(){
                it('should return false when the user is no admin or superAdmin and himself', function(){
                    var userToInsert = {
                        emails:[
                            {address: 'wantsToMakeAdmin@admin.de'}
                        ],
                        username: "wantsToMakeAdmin",
                        profile :{
                            fullname: 'wantsToMakeAdmin wantsToMakeAdmin',
                            admin:true
                        }
                    };
                    var noAdmin = Meteor.users.insert(userToInsert);
                    var noAdminObj = Meteor.users.findOne({_id: noAdmin});
                    var returnVal = checkRights.makeAndRemoveAdmin(noAdmin, noAdmin, noAdminObj);
                    Meteor.users.remove({username:'wantsToMakeAdmin'});
                    chai.assert.isFalse(returnVal, 'The user is not allowed to make and remove admins');
                });
            });

            describe("makeAndRemoveAdmin superAdmin himself", function(){
                it('should return false when the user is no admin or superAdmin and himself', function(){
                    var userToInsert = {
                        emails:[
                            {address: 'wantsToMakeAdmin@admin.de'}
                        ],
                        username: "wantsToMakeAdmin",
                        profile :{
                            fullname: 'wantsToMakeAdmin wantsToMakeAdmin',
                            superAdmin:true
                        }
                    };
                    var noAdmin = Meteor.users.insert(userToInsert);
                    var noAdminObj = Meteor.users.findOne({_id: noAdmin});
                    var returnVal = checkRights.makeAndRemoveAdmin(noAdmin, noAdmin, noAdminObj);
                    Meteor.users.remove({username:'wantsToMakeAdmin'});
                    chai.assert.isFalse(returnVal, 'The user is not allowed to make and remove admins');
                });
            });

            describe("makeAndRemoveAdmin superAdmin not himself", function(){
                it('should return false when the user is no admin or superAdmin and himself', function(){
                    var userToInsert = {
                        emails:[
                            {address: 'wantsToMakeAdmin@admin.de'}
                        ],
                        username: "wantsToMakeAdmin",
                        profile :{
                            fullname: 'wantsToMakeAdmin wantsToMakeAdmin',
                            superAdmin:true
                        }
                    };
                    var noAdmin = Meteor.users.insert(userToInsert);
                    var noAdminObj = Meteor.users.findOne({_id: noAdmin});
                    var returnVal = checkRights.makeAndRemoveAdmin("otherUser", noAdmin, noAdminObj);
                    Meteor.users.remove({username:'wantsToMakeAdmin'});
                    chai.assert.isTrue(returnVal, 'The user is not allowed to make and remove admins');
                });
            });

            describe("makeAndRemoveAdmin admin not himself", function(){
                it('should return false when the user is no admin or superAdmin and himself', function(){
                    var userToInsert = {
                        emails:[
                            {address: 'wantsToMakeAdmin@admin.de'}
                        ],
                        username: "wantsToMakeAdmin",
                        profile :{
                            fullname: 'wantsToMakeAdmin wantsToMakeAdmin',
                            admin:true
                        }
                    };
                    var noAdmin = Meteor.users.insert(userToInsert);
                    var noAdminObj = Meteor.users.findOne({_id: noAdmin});
                    var returnVal = checkRights.makeAndRemoveAdmin("otherUser", noAdmin, noAdminObj);
                    Meteor.users.remove({username:'wantsToMakeAdmin'});
                    chai.assert.isTrue(returnVal, 'The user is not allowed to make and remove admins');
                });
            });
        });

    });
}

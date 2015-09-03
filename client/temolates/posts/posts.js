PCollection = new Mongo.Collection(null)
Template.Posts.helpers({
    'posts':function(){
        var from = Session.get('from');
        var sortfor = Session.get('sortfor');
        var limit =  Session.get('limit');
        var sort = {}
        sort[sortfor] = 1;
        return Posts.find({},{
            sort: sort,
            skip: from *limit,
            limit: limit
        }).fetch();
    },
    'counter':function () {
        var count = Posts.find({}).count();
        var test = 0;
        var res = [];
        var limit = Session.get('limit');
        for(var i =0; count > test;i++){
            test += limit;
            res.push({
                index: i,
                display:i+1
            })
        }
        return res;
    }

})
Template.Posts.onCreated(function () {
   Session.set('from',0);
    Session.set('sortfor','username');
    Session.set('limit',5);
});
Template.Posts.events({
    "click #sort-name":function (e,tmp){
        e.preventDefault();
        Session.set('sortfor','username');
    },
    "click #sort-email":function (e,tmp){
        e.preventDefault();
        Session.set('sortfor','email');
    },
    "click .number":function (e,tmp){
        e.preventDefault();
        var from = parseInt($(e.target).attr('data-index'));
        Session.set('from',from);
    }
});

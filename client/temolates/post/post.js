Template.Post.events({
    'submit #new-post ':function (e,tmp) {
        e.preventDefault();
        var username = $('#input-username').val();
        var email = $('#input-email').val();
        var url = $('#input-url').val();
        var description = $('#input-description').val();
        if(Session.get('selectedPostId')){
            Posts.update({_id:Session.get('selectedPostId')},{
                username:username,
                email:email,
                url:url,
                description:description
            });
        }else{
        Posts.insert({
            username:username,
            email:email,
            url:url,
            description:description
        });
        }
        $(".close-animatedModal").click();
        Session.set('selectedPostId',null)
    },
    "click .close-animatedModal":function (e,tmp){
        e.preventDefault();
        Session.set('selectedPostId',null);
    }
});
Template.Post.helpers({
    'post':function(){
        var Id = Session.get('selectedPostId');
        return Posts.findOne({_id:Id});
    }
})
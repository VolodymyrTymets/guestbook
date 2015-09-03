Template.Post.events({
    'submit #new-post ':function (e,tmp) {
        e.preventDefault();
        var username = $('#input-username').val();
        var email = $('#input-email').val();
        var url = $('#input-url').val();
        var description = $('#input-description').val();

        Posts.insert({
            username:username,
            email:email,
            url:url,
            description:description
        })
    }
});
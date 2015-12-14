/*******************
 * Helper functions
 ******************/

/*******************
 * Handlebars registerHelper functions
 ******************/

Handlebars.registerHelper('loggedIn', function () {
    return !!Meteor.userId();
});

Handlebars.registerHelper('currentUserId', function () {
    return Meteor.userId();
});


Handlebars.registerHelper('currentUser', function () {
    return Meteor.user();
});

Handlebars.registerHelper('isOwner', function (userId, doc) {
    if (doc.owners.indexOf(userId) > -1) {
        return true;
    }
});

/*******************
 * Template registerHelper functions
 ******************/

Template.registerHelper('extendContext', function(data) {
    var result = _.clone(this);
    _.each(data.hash, function(value, key) {
        result[key] = value;
    })
    return result;
});
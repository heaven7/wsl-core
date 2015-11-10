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
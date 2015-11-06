/*******************
 * Helper functions
 ******************/

/*******************
 * Handlebars registerHelper functions
 ******************/

Handlebars.registerHelper('loggedIn', function () {
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

/*******************
 * Core Extension Setup
 ******************/

Session.set("Mongol", {
    'collections': ['Tasks', 'TaskCategories', 'Projects', 'Items'],
    'display': true,
    'opacity_normal': ".7",
    'opacity_expand': ".9",
    'disable_warning': 'false'
});
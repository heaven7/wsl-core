/*******************
 * Helper functions
 ******************/

/*******************
 * Handlebar Helper functions
 ******************/

Handlebars.registerHelper('loggedIn', function () {
    return Meteor.userId();
});
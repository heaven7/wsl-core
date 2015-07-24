/**
 * Handlebars helper
 *
 */
Template.registerHelper('isLoggedIn', function() {
    return !!Meteor.user();
});
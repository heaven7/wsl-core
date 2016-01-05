/**
 * WSL.collection namespace
 * @namespace WSL.collection
 * @type {Object}
 */

WSL.collection = {};

/**
 * Collection hooks
 */

WSL.collection.addSettingsAfter = function(collection, docType) {
    collection.after.insert(function (userId, doc) {
        Settings.insert({doc: doc._id, docType: docType, public: true, watchable: true, commentable: true, shareable: true });
    });
};

WSL.collection.addRolesAfter = function(collection, roles) {
    collection.after.insert(function (userId, doc) {
        Meteor.call('addUserToRoles', userId, roles, doc._id);
    });
};

WSL.collection.addOwnershipBefore = function(collection) {
    collection.before.insert(function (userId, doc) {
        doc.owners = typeof doc.owners == 'array' ? doc.owners : [];
        doc.owners.push(userId);
        doc.createdAt = Date.now();
    });
};
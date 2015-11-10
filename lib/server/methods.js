/**
 * Core methods
 */

/**
 * Get the ressource
 * @param string doc _id
 * @param string docType Collectionname
 */

Meteor.methods({
    _getRessource: function(doc, docType) {
        check([doc, docType], [String]);
        this.unblock();
        if (doc && docType) {
            return Mongo.Collection.get(docType.toLowerCase()).findOne({
                _id: doc
            });
        }
        return false;
    },
    _getRessourceOwner: function(owner) {
        check(owner, String);
        this.unblock();
        return Meteor.users.find({
            _id: owner
        }).fetch();
    }
});
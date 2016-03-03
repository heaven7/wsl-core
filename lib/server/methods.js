/**
 * Core methods
 */

Meteor.methods({

    /**
     * Get the ressource
     * @param string doc _id
     * @param string docType Collectionname
     */

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

    /**
     * Get the ressource owner
     * @param string owner _id
     */

    _getRessourceOwner: function(owner) {
        check(owner, String);
        this.unblock();
        return Meteor.users.findOne({
            _id: owner
        });
    }
});
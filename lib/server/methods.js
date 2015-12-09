/**
 * Core methods
 */

Meteor.methods({
        sendMail: function(to, from, subject, text, html) {
        var e;
        check([to, from, subject], [String]);
        this.unblock();
        e = Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text,
            html: html
        });
        return console.log('Email sent: ' + EJSON.stringify([to, from, subject, text]));
    },

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
/**
 * Global var Schemas
 * @type {Object}
 */

Schemas = {}

/**
 * Base Schema
 * @type {SimpleSchema} Schemas.Base
 */

Schemas.Base = new SimpleSchema({
    doc: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },

    docType: {
        type: String
    },

    owners: {
        type: [Object],
        optional: true
    },

    "owners.$.user": {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true
    },

    createdAt: {
        type: Date,
        optional: true,
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            }
        }
    },

    modified: {
        type: Date,
        optional: true,
        autoValue: function() {
            if (this.isInsert) {
                return this.unset();
            } else {
                return new Date();
            }
        }
    }
});

/**
 * Add base schemas to collection
 * @param {Object} collection
 */

Schemas.addBaseTo = function (collection) {

    collection.attachSchema(Schemas.Base);

    // make use of settings schema if available
    if(typeof Package['heaven7:wsl-settings'] == 'object') {
        collection.attachSchema(Schemas.Settings);
    }

};

/**
 * Add schema to collection
 * @param {Object} Collection
 */

Schemas.add = function(schema, collection) {
    collection.attachSchema(schema);
};

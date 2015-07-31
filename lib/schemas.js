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

/**
 * Extends a schema
 * @param {SimpleSchema} collectionSchema
 * @param {SimpleSchema[]} schemas
 */
Schemas.extend = function(collectionSchema, schemas) {
    // inspired by
    // https://github.com/aldeed/meteor-simple-schema/blob/master/simple-schema.js
    var mergedSchema = {};
    if (!_.isArray(schemas)) {
        schemas = [schemas];
    }
    schemas.push(collectionSchema);

    _.each(schemas, function(schema) {

        // Create a temporary SS instance so that the internal object
        // we use for merging/extending will be fully expanded
        if (Match.test(schema, SimpleSchema)) {
            schema = schema._schema;
        }

        // Loop through and extend each individual field
        // definition. That way you can extend and overwrite
        // base field definitions.
        _.each(schema, function(def, field) {
            mergedSchema[field] = mergedSchema[field] || {};
            _.extend(mergedSchema[field], def);
        });
    });
    return mergedSchema;
};
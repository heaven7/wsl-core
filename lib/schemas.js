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
        type: [SimpleSchema.RegEx.Id],
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
 * Add schemas to collection
 * @param {SimpleSchema[]} schemas
 * @param {Mongo.Collection} collection
 */

Schemas.add = function(schemas, collection) {
    if (!_.isArray(schemas)) {
        schemas = [schemas];
    }
    _.each(schemas, function(schema) {
        collection.attachSchema(schema);
    });
};

/**
 * Depending on installed packages extend the given schema
 * @param {SimpleSchema} collectionSchema
 */

Schemas.packages = function(collectionSchema) {

    var schemas = [
        Schemas.Base,
        collectionSchema
    ];

    if(Package['heaven7:wsl-settings'] && collectionSchema != Schemas.Settings)
        schemas.push(Schemas.Settings);

    if(Package['heaven7:wsl-locations'] && collectionSchema != Schemas.Locations)
        schemas.push(Schemas.Locations);
        //WSL.co

    return Schemas._merge(schemas);
};

/**
 * Merge schemas
 * @param {SimpleSchema[]} schemas
 * @returns {Object}
 * @private
 */

Schemas._merge = function (schemas) {

    // inspired by
    // https://github.com/aldeed/meteor-simple-schema/blob/master/simple-schema.js

    var mergedSchema = {};
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
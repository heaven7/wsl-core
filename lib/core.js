/**
 * Global namespace for WeShare.Love (WSL)
 * @namespace WSL
 * @type {Object}
 */

WSL = {};

/**
 * App Version
 * @type {string}
 */

WSL.VERSION = '0.0.1',

/**
 * App Name
 * @type {string}
 */

WSL.appname = 'We share Love';

/**
 * Public routes
 * @type {object}
 */

WSL.publicRoutes= [];

/**
 * Add routes to publicRoutes
 * @param {[string]} routes
 */

WSL.addPublicRoutes= function (routes) {
  if(typeof routes == 'object') {
    for(var i in routes) {
        WSL.addPublicRoutes(routes[i]);
    }
  } else if (routes && typeof routes == 'string') {
      WSL.publicRoutes = _.union(WSL.publicRoutes, routes);
  }
};

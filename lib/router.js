/**
 * publicRoutes array
 */
WSL.routes = {
    public: ['home', 'signup', 'login']
};

/**
 * Subs Manager
 */

subs = new SubsManager({
    // will be cached only 20 recently used subscriptions
    cacheLimit: 20,
    // any subscription will be expired after 5 minutes of inactivity
    expireIn: 5
});


Package.describe({
  name: 'heaven7:wsl-core',
  version: '0.0.1',
  summary: 'Core functionality package',
  git: 'https://github.com/heaven7/wsl-core.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    var packages =
        [
            'meteor-platform',
            'standard-app-packages',
            'service-configuration',
            'multiply:iron-router-progress@1.0.1',
            'matb33:collection-hooks@0.7.14',
            'aldeed:collection2@2.3.3',
            'aldeed:autoform@5.5.0',
            'aldeed:simple-schema@1.3.3',
            'dburles:mongo-collection-instances@0.3.4',
            'dburles:collection-helpers@1.0.3',
            'raix:handlebar-helpers@0.2.3',
            'reactive-var',
            'alanning:roles',
            'npm-container',
            'meteorhacks:npm',
            'http',
            'email',
            'mrt:moment@1.7.0',
            'coffeescript',
            'templating',
            'msavin:mongol'
        ];

    api.use(packages);
    api.imply(packages);

    api.addFiles([,
        'lib/core.js',
        'lib/router.js',
        'lib/schemas.js',
        'lib/callbacks.js'
    ], both);

    api.addFiles([
    ], 'server');

    api.addFiles([
        'lib/client/helpers.js'
    ], 'client');

    api.export([
        'Schemas',
        'WSL'
    ]);

});

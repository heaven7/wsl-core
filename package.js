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
            'multiply:iron-router-progress',
            'aldeed:collection2',
            'aldeed:autoform@5.3.1',
            'aldeed:simple-schema',
            'manuelschoebel:ms-seo@0.4.1',
            'tap:i18n@1.5.1',
            'reactive-var',
            'http',
            'email',
            'mrt:moment',
            'spiderable',
            'coffeescript',
            'templating'
        ];

    api.use(packages);
    api.imply(packages);

    api.addFiles([
        'lib/router.js',
        'lib/schemas.js',
        'lib/core.js'
    ], both);

    api.addFiles([
       'lib/server/app.js'
    ]);

    api.addFiles([
        'lib/client/handlebars.js',
        'lib/client/helpers.js'
    ], 'client');

    api.export([
        'Schemas',
        'WSL'
    ]);

});

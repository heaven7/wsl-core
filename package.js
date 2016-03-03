Package.describe({
  name: 'heaven7:wsl-core',
  version: '0.0.3_1',
  summary: 'Core functionality package',
  git: 'https://github.com/heaven7/wsl-core.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    var packages =
        [
            'meteor-platform',
            'standard-app-packages',
            'service-configuration',
            'matb33:collection-hooks@0.8.1',
            'aldeed:collection2@2.5.0',
            'aldeed:autoform@5.8.0',
            'mpowaga:autoform-summernote@0.4.3',
            'aldeed:simple-schema@1.3.3',
            'fortawesome:fontawesome',
            'dburles:mongo-collection-instances@0.3.4',
            'dburles:collection-helpers@1.0.3',
            'raix:handlebar-helpers@0.2.5',
            'cmather:handlebars-server@2.0.0',
            'reactive-var',
            'reactive-dict',
        //    'meteorhacks:npm@1.5.0',
            'meteorhacks:fast-render@2.10.0',
            'meteorhacks:subs-manager@1.6.2',
            'http',
            'random',
            'mrt:moment@2.8.1',
            'coffeescript',
            'es5-shim',
            'ecmascript',
            'underscorestring:underscore.string@2.4.0',
            'templating',
            'standard-minifiers',
            'msavin:mongol@1.6.2',
            'reywood:publish-composite@1.3.6',
            'yogiben:helpers@0.0.6'
        ];

    api.use(packages);
    api.imply(packages);

    api.addFiles([,
        'lib/core.js',
        'lib/router.js',
        'lib/schemas.js',
        'lib/callbacks.js',
        'lib/collections.js'
    ], both);

    api.addFiles([
        'lib/server/methods.js'
    ], 'server');

    api.addFiles([
        'lib/client/helpers.js'
    ], 'client');

    api.export([
        'Schemas',
        'WSL',
        'subs'
    ]);

});

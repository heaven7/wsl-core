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
            'standard-app-packages',
            'service-configuration',
            'multiply:iron-router-progress',
            'aldeed:collection2',
            'aldeed:autoform@5.3.1',
            'aldeed:simple-schema',
            'mrt:moment',
            'spiderable',
            'coffeescript',
            'templating'
        ];

    api.use(packages);
    api.imply(packages);

    api.addFiles([
        'lib/both/router.js',
        'wsl-core.js'
    ], both);

});

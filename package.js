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
    api.addFiles('wsl-core.js');
});

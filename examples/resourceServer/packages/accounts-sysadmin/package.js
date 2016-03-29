Package.describe({
  name: 'clinical:accounts-sysadmin',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('templating')
  api.use('clinical:roles@2.4.4');

  api.addFiles('client/helpers.js', 'client');
  api.addFiles('server/initialize.js', 'server');

});

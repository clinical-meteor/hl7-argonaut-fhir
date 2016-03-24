Package.describe({
  name: 'clinical:accounts-sysadmin',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('accounts-sysadmin.js');
});

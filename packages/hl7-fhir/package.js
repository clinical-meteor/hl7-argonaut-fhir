Package.describe({
  name: 'clinical:hl7-fhir',
  version: '0.0.5',
  summary: 'HL7 FHIR for Meteor Apps.  Implements the Argonaut reference spec.',
  git: 'http://github.com/awatson1978/hl7-argonaut-fhir',
  documentation: 'README.md'
});

Npm.depends({
  "oauth2orize":"1.0.1"
});

Package.onUse(function (api) {
  api.use('standard-app-packages@1.0.2', ['client', 'server']);
  api.use('nimble:restivus@0.8.4');

  api.versionsFrom('1.1.0.3');

  api.addFiles('lib/collections.js');
  api.addFiles('server/initialize.js');
  api.addFiles('lib/restivus.js');

  api.export('Patients');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:hl7-fhir');
  api.addFiles('tests/hl7-fhir-tests.js');
});

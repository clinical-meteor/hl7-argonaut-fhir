Package.describe({
  name: 'clinical:hl7-fhir',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'HL7 FHIR for Meteor Apps.  Implements the Argonaut reference spec.',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/awatson1978/hl7-argonaut-fhir',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('nimble:restivus@0.8.4');

  api.versionsFrom('1.1.0.3');

  //api.addFiles('mongo.js');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:hl7-fhir');
  api.addFiles('hl7-fhir-tests.js');
});

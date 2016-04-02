Template.configureLoginServiceDialogForOAuth2Server.base_url = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForOAuth2Server.fields = function () {
  return [
    {
      property: 'clientId',
      label: 'API Key (Client ID)'
    },
    {
      property: 'secret',
      label: 'Secret Key'
    },
    {
      property: 'baseUrl',
      label: 'Target Base URL'
    },
    {
      property: 'loginUrl',
      label: 'Target Login URL'
    }
    ];
};

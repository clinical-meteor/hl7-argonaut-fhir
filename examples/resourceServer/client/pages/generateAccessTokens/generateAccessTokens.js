Router.route("/generateAccessTokens", {
  name: "generateAccessTokens",
  template: "generateAccessTokens"
});

Template.generateAccessTokens.grantResult = new ReactiveVar(null);

Template.generateAccessTokens.events({
  /**
   * AUTH FLOW - Step A5.1
   * user clicks the authorize button.
   */
  'click button.authorizePatientsAccessTokens': function () {
    console.log('Authorize Patients button clicked.');
    //var urlParams = getUrlParams();
    var urlParams = Session.get('urlParams');

    // create an authorization code for the provided client.
    oAuth2Server.callMethod.authCodeGrant(
      urlParams.client_id,
      urlParams.redirect_uri,
      urlParams.response_type,
      urlParams.scope && urlParams.scope.split(' '),
      urlParams.state,
      function (err, result) {
        console.log('grantResult', result);

        // give the UI something to display.
        // if (process.env.DEBUG) {
          Template.generateAccessTokens.grantResult.set(result);
        // } else {
        //   window.location.replace(result.redirectToUri);
        // }
      }
    );
  }
});

Template.generateAccessTokens.helpers({
  grantResult: function () {
    return Template.generateAccessTokens.grantResult.get();
  },
});

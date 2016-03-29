// JsonRoutes.Middleware.use(
//   '/api/*',
//   oAuth2Server.oauthserver.authorise()   // OAUTH FLOW - A7.1
// );


JsonRoutes.add("get", "_oauth/MeteorOAuth2Server", function (req, res, next) {
  console.log('GET _oauth/MeteorOAuth2Server' + req.params);

  // JsonRoutes.sendResult(res, {
  //   code: 200,
  //   data: Patients.findOne(id)
  // });
});

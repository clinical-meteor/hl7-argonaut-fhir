

JsonRoutes.add("get", "_oauth/OAuth2Server", function (req, res, next) {
  console.log('GET _oauth/OAuth2Server' + req.params);

  // JsonRoutes.sendResult(res, {
  //   code: 200,
  //   data: Patients.findOne(id)
  // });
});

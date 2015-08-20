// Patients = new Mongo.Collection('patients');
// Articles = new Mongo.Collection('articles');
//
// Patients.allow({
//   insert: function (){
//     return true;
//   },
//   update: function (){
//     return true;
//   },
//   remove: function (){
//     return true;
//   }
// });


if (Meteor.isServer) {

  // Global API configuration
  var Api = new Restivus({
    defaultHeaders: {
      'Content-Type': 'application/json'
    },
    onLoggedIn: function () {
      console.log(this.user.username + ' (' + this.userId + ') logged in');
    },
    onLoggedOut: function () {
      console.log(this.user.username + ' (' + this.userId + ') logged out');
    },
    prettyJson: true,
    useDefaultAuth: true,
  });

  // Generates: GET, POST on /api/patients and GET, PUT, DELETE on
  // /api/patients/:id for the Patients collection
  // Api.addCollection(Patients,{
  //   path: 'Patient/'
  // });

  Api.addRoute('Patients', {
    authRequired: false
  }, {
    get: function () {
      return Patients.find({}, {limit: 100}).fetch();
    }
  });

    Api.addRoute('Patient/:id', {
    authRequired: false
  }, {
    get: function () {
      console.log('this.queryParams', this.queryParams);
      var query = {
        _id: this.urlParams.id
      };

      console.log('query', query);

      var result = Patients.findOne(query);
      if(result){
        return result;
      }else{
        return [];
      }
    },
    post: function () {
      // POST api/articles
    },
    put: function () {
      // PUT api/articles
    },
    patch: function () {
      // PATCH api/articles
    },
    delete: function () {
      // DELETE api/articles
    },
    options: function () {
      // OPTIONS api/articles
    }
  });

  Api.addRoute('Patient', {
    authRequired: false
  }, {
    get: function () {
      console.log('this.queryParams', this.queryParams);
      var query = {};

      if (this.queryParams.name) {
        query['name..0.given.0'] = this.queryParams.name;
      }
      if (this.queryParams.family) {
        query['name.0.family.0'] = this.queryParams.family;
      }
      if (this.queryParams.identifier) {
        query['identifier.0.value'] = this.queryParams.identifier;
      }
      if (this.queryParams.gender) {
        query['gender.text'] = this.queryParams.gender;
      }
      if (this.queryParams.birthdate) {
        query['birthDate'] = this.queryParams.birthdate;
      }

      console.log('query', query);

      var result = Patients.findOne(query);
      if(result){
        return result;
      }else{
        return [];
      }
    },
    post: function () {
      // POST api/articles
    },
    put: function () {
      // PUT api/articles
    },
    patch: function () {
      // PATCH api/articles
    },
    delete: function () {
      // DELETE api/articles
    },
    options: function () {
      // OPTIONS api/articles
    }
  });


  // Generates: POST on /api/users and GET, DELETE /api/users/:id for
  // Meteor.users collection
  Api.addCollection(Meteor.users, {
    excludedEndpoints: ['getAll', 'put'],
    routeOptions: {
      authRequired: true
    },
    endpoints: {
      post: {
        authRequired: false
      },
      delete: {
        roleRequired: 'admin'
      }
    }
  });

  // // Maps to: /api/articles/:id
  // Api.addRoute('articles/:id', {authRequired: true}, {
  //   get: function () {
  //     return Articles.findOne(this.urlParams.id);
  //   },
  //   delete: {
  //     roleRequired: ['author', 'admin'],
  //     action: function () {
  //       if (Articles.remove(this.urlParams.id)) {
  //         return {status: 'success', data: {message: 'Article removed'}};
  //       }
  //       return {
  //         statusCode: 404,
  //         body: {status: 'fail', message: 'Article not found'}
  //       };
  //     }
  //   }
  // });
}

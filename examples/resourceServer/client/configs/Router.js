Router.configure({
  // we use the  appLayout template to define the layout for the entire app
  layoutTemplate: 'appLayout',

  // the pageNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'pageNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

  yieldTemplates: {
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    },
    'sidebar': {
      to: 'westPanel'
    },
    'userSearchInput': {
      to: 'globalInput'
    },
    'navbarHeader': {
      to: 'header'
    }
  }
});


if (Meteor.isClient) {
  Router.onBeforeAction('loading', {except: ['entrySignUp', 'entrySignIn']});
  Router.onBeforeAction('dataNotFound', {except: ['entrySignUp', 'entrySignIn']});
}

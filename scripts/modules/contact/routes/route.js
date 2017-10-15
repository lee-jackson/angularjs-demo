var route = function($stateProvider) {
  $stateProvider
    .state('contact', {
      url: '/contact',
      template: require('../partials/contact.html')
    });
};

module.exports = ['$stateProvider', route];

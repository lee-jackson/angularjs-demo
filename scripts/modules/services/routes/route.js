var route = function($stateProvider) {
  $stateProvider
    .state('services', {
      url: '/services',
      template: require('../partials/services.html')
    });
};

module.exports = ['$stateProvider', route];

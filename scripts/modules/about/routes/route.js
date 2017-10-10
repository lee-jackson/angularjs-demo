var route = function($stateProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      template: require('../partials/about.html')
    });
};

module.exports = ['$stateProvider', route];

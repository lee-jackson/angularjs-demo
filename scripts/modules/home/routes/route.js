var route = function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('../partials/home.html'),
      controller: 'HeadingController',
      controllerAs: 'headingCtrl'
    });
};

module.exports = ['$stateProvider', route];

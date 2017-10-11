var route = function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('../partials/home.html'),
      controller: 'HomeController',
      controllerAs: 'ctrl'
    });
};

module.exports = ['$stateProvider', route];

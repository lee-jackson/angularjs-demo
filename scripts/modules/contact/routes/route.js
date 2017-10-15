var route = function($stateProvider) {
  $stateProvider
    .state('contact', {
      url: '/contact',
      template: require('../partials/contact.html'),
      controller: 'ContactController',
      controllerAs: 'ctrl',
      bindToController: true
    });
};

module.exports = ['$stateProvider', route];

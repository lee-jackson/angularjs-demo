var route = function($stateProvider) {
  $stateProvider
    .state('thanks', {
      template: require('../partials/thanks.html'),
      controller: 'ThanksController',
      controllerAs: 'ctrl',
      bindToController: true
    });
};

module.exports = ['$stateProvider', route];

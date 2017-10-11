var route = function($stateProvider) {
  $stateProvider
    .state('products', {
      url: '/products',
      template: require('../partials/products.html'),
      controller: 'ProductsController',
      controllerAs: 'ctrl'
    });
};

module.exports = ['$stateProvider', route];

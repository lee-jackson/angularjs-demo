var route = function($stateProvider) {
  $stateProvider
    .state('products', {
      url: '/products',
      template: require('../partials/products.html')
    });
};

module.exports = ['$stateProvider', route];

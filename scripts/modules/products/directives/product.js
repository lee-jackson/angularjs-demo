var product = function() {
  return {
    restrict: 'A',
    scope: {
      product: '='
    },
    template: require('../partials/product.html'),
    controller: 'ProductController',
    controllerAs: 'productCtrl',
    bindToController: true
  };
};

module.exports = product;

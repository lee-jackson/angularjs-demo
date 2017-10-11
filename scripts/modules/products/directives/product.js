var product = function() {
  return {
    restrict: 'A',
    scope: {
      product: '='
    },
    template: require('../partials/product.html'),
    controller: 'ProductController',
    controllerAs: 'ctrl',
    bindToController: true
  };
};

module.exports = product;

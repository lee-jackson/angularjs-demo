var product = function() {
  return {
    restrict: 'A',
    scope: {
      product: '<'
    },
    template: require('../partials/product.html')
  };
};

module.exports = product;

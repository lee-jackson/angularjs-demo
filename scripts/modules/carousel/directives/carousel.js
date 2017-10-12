var carousel = function() {
  return {
    restrict: 'E',
    scope: {
      items: '='
    },
    template: require('../partials/carousel.html'),
    controller: 'CarouselController',
    controllerAs: 'ctrl',
    bindToController: true
  };
};

module.exports = carousel;

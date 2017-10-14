var hamburger = function() {
  return {
    restrict: 'A',
    link: function(scope,elem) {
      elem.bind('click', function() {
        // jqLite doesn't support finding elements
        // by selectors, so literally going up
        // from the hamburger to the list elements
        // and then selecting all children
        angular.element(elem)
               .parent()
               .children()
               .toggleClass('show');
      });
    }
  };
};

module.exports = hamburger;

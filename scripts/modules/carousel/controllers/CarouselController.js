var ctrl = function($scope, $interval) {
  var self = this,
      currentIndex,
      intervalPromise;

  function startRotation() {
    if (intervalPromise) {
      $interval.cancel(intervalPromise);
    }

    intervalPromise = $interval(function() {
      var nextIndex = currentIndex + 1 > self.items.length - 1 ? 0 : currentIndex + 1;

      self.setCurrentItemWithIndex(nextIndex);
    }, 3000);
  }

  self.setCurrentItemWithIndex = function(index) {
    currentIndex = index;
    self.currentItem = self.items[currentIndex];

    startRotation();
  };

  // On controller load the directive's isolate scope is not available
  // therefore setup a watch to assign the default current item
  // when it is available
  $scope.$watch(function() {
     return self.items;
   },
   function(newValue) {
    if (newValue){
        self.setCurrentItemWithIndex(0);

        startRotation();
    }
  });
};

module.exports = ['$scope', '$interval', ctrl];

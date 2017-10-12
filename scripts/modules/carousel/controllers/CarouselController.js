var ctrl = function($scope, $interval) {
  var self = this,
      intervalPromise;

  function startRotation() {
    // On first call there won't be an intervalPromise
    if (intervalPromise) {
      $interval.cancel(intervalPromise);
    }

    intervalPromise = $interval(function() {
      var nextIndex = self.currentIndex + 1 > self.items.length - 1 ? 0 : self.currentIndex + 1;

      self.setCurrentItem(nextIndex);
    }, 3000);
  }

  self.setCurrentItem = function(index) {
    self.currentIndex = index;
    self.currentItem = self.items[self.currentIndex];

    startRotation();
  };

  self.isCurrentItem = function(index) {
    return index === self.currentIndex;
  };

  // On controller load the directive's isolate scope is not available
  // therefore setup a watch to assign the default current item
  // when it is available and start rotation of images
  $scope.$watch(function() {
     return self.items;
   },
   function(newValue) {
    if (newValue){
        self.setCurrentItem(0);

        startRotation();
    }
  });
};

module.exports = ['$scope', '$interval', ctrl];

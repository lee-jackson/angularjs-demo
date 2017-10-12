var ctrl = function($scope) {
  var self = this;

  self.setCurrentItem = function(item) {
    self.currentItem = item;
  };

  // On controller load the directive's isolate scope is not available
  // therefore setup a watch to assign the default current item
  // when it is available
  $scope.$watch(function() {
     return self.items;
   },
   function(newValue) {
    if (newValue){
        self.setCurrentItem(self.items[0]);
    }
  });
};

module.exports = ['$scope', ctrl];

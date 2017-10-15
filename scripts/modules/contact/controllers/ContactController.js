var ctrl = function($state, contactService) {
  var self = this;

  self.model = {};

  self.submit = function() {
    contactService.update(self.model);

    $state.go('thanks');
  };
};

module.exports = ['$state', 'ContactService', ctrl];

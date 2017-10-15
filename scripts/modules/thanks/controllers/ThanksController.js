var ctrl = function(contactService) {
  var self = this;

  self.model = contactService.contactDetails;
};

module.exports = ['ContactService', ctrl];

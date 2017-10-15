var factory = function() {
  var service = {};

  service.contactDetails = {};

  service.update = function(formModel) {
    service.contactDetails = formModel;
  };

  return service;
};

module.exports = factory;

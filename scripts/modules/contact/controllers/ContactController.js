var ctrl = function() {
  var self = this;

  self.model = {};

  self.submit = function() {
    console.log(self.form);
  };
};

module.exports = ctrl;

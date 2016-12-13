function ContactController() {
  var vm = this;

  vm.name = 'Carl';
  vm.email = 'carl@example.com';
  vm.phone = '1234567890';

  this.changeName = function() {
    vm.name = 'Something else!';
  }
}

angular.module('app').controller('ContactController', ContactController);

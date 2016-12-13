function StaffController() {
  this.name = 'Bob';
  this.email = 'bob@example.com';
  this.phone = '1234567890';
}

angular.module('app').controller('StaffController', StaffController);

app.controller('AccountController', function($scope, $state) {
   $scope.settings = {
      enableFriends: true
   };

   $scope.logOut = function() {
      $state.go('start');
   }
});

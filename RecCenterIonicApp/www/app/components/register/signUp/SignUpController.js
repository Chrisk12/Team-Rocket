app.controller("SignUpController", function($scope, $state, $ionicNavBarDelegate, $ionicPopup,
               $ionicLoading) {

   $ionicNavBarDelegate.showBackButton(true);

   $scope.input = {
      email: '',
      password: '',
      reEntered: ''
   };

   $scope.signUp = function() {
      showLoading();

         if (!$scope.input.email) {
            showAlert('E-mail address', 'Oops! The e-mail entered is not valid.');

         } else if (!$scope.input.password || !$scope.input.reEntered) {
            showAlert('Password', 'Oops! Looks like you didn\'t enter your password.');

         } else if ($scope.input.password !== $scope.input.reEntered) {
            showAlert('Password', "Uh oh! Passwords don't match.");

         } else {
            console.log("Sign up successful!");
            $state.go('tab.events');
         }
   }

   function showAlert(title, message) {
      hideLoading();
      $ionicPopup
         .alert({
            title: title,
            template: message
         })
   }

   function showLoading() {
      $ionicLoading.show({
         template: '<ion-spinner></ion-spinner>',
         hideOnStateChange: true
      });
   }

   function hideLoading() {
      $ionicLoading.hide();
   }

});
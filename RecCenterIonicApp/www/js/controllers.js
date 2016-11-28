angular.module('starter.controllers', [])

.controller('WelcomeCtrl', function($scope, $state, UserService, $ionicLoading) {
  // This method is executed when the user press the "Sign in with Google" button
  $scope.googleSignIn = function() {
    $ionicLoading.show({
      template: 'Logging in...'
    });
    window.plugins.googleplus.login(
      {},
      function (user_data) {
        // For the purpose of this example I will store user data on local storage
        UserService.setUser({
          userID: user_data.userId,
          name: user_data.displayName,
          email: user_data.email,
          picture: user_data.imageUrl,
          accessToken: user_data.accessToken,
          idToken: user_data.idToken
        });
        $ionicLoading.hide();
        $state.go('app.home');
      },
      function (msg) {
        $ionicLoading.hide();
      }
    );
  };
})

.controller('DashCtrl', function($scope) {})

.controller('EventsCtrl', function($scope, Events) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.events = Events.all();
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})

.controller('SettingsCtrl', function($scope, $ionicPopup) {
  $scope.settings = {
    enableFriends: true
  }

  $scope.signoutConfirm = function() {
  
      var confirmPopup = $ionicPopup.confirm({
         title: 'Sign Out?',
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Yes');
         } else {
            console.log('No');
         }
      });
    
   };

  $scope.deleteAccountConfirm = function() {
  
      var confirmPopup = $ionicPopup.confirm({
         title: 'Delete Account?',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Yes');
         } else {
            console.log('No');
         }
      });
    
   };
})

//
//  Controllers for pages in Settings Tab
//

.controller('EmailCtrl', function($scope) {
  $scope.setNavTitle = function(email) {
   $ionicNavBarDelegate.title(email);
  }
})

.controller('PasswordCtrl', function($scope){
  $scope.setNavTitle = function(password) {
   $ionicNavBarDelegate.title(ChangePassword);
  }
})

.controller('FavCtrl', function($scope) {})

.controller('FriendCtrl', function($scope) {})

.controller('SignOutCtrl', function($scope, $ionicPopup) {

})

.controller('DeleteAccCtrl', function($scope) {});
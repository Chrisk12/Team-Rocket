app.controller('ChatDetailController', function($scope, $stateParams, Chats) {
   $scope.chat = Chats.get($stateParams.chatId);
})
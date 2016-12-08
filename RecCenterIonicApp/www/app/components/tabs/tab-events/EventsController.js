app.controller('EventsController', function($scope) {

   $scope.searchTerm = '';

   $scope.events = [
      {title: 'Soccer', img: 'img/soccer.jpg'},
      {title: 'Volleyball', img: 'img/volleyball.jpg'},
      {title: 'Ultimate Frisbee', img: 'img/frisbee.jpg'},
      {title: 'Boxing', img: 'img/cal-poly-boxing.jpg'},
      {title: 'Dancing', img: 'img/cal-poly-dancing.jpg'},
      {title: 'Personal Training', img: 'img/cal-poly-personal-training.jpg'},
      {title: 'Swimming', img: 'img/cal-poly-pool.jpg'}
   ];

   $scope.chooseEvent = function(event) {
      console.log(event.title);
   };

   $scope.addEvent = function() {
      console.log('add event clicked');
   };
});
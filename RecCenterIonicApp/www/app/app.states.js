app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

   $ionicConfigProvider.backButton.previousTitleText(false).text('');

   $urlRouterProvider.otherwise('/');

   $stateProvider

      .state('start', {
         url: '/',
         templateUrl: 'app/components/start/start.html'
      })

      .state('register', {
         url: '/register',
         abstract: true,
         templateUrl: 'app/components/register/register.html'
      })

      .state('register.signIn', {
         url:'/signIn',
         views: {
            'content': {
               templateUrl: 'app/components/register/signIn/signIn.partial.html',
               controller: 'SignInController'
            }
         }
      })

      .state('register.signUp', {
         url:'/signUp',
         views: {
            'content': {
               templateUrl: 'app/components/register/signUp/signUp.partial.html',
               controller: 'SignUpController'
            }
         }
      })

      .state('register.checkIn', {
         url:'/checkIn',
         views: {
            'content': {
               templateUrl: 'app/components/register/checkIn/checkIn.partial.html',
               controller: 'CheckInController'
            }
         }
      })

      // setup an abstract state for the tabs directive
      .state('tab', {
         url: '/tab',
         abstract: true,
         templateUrl: 'app/components/tabs/tabs.html'
      })

      .state('tab.events', {
         url: '/events',
         views: {
            'tab-events': {
               templateUrl: 'app/components/tabs/tab-events/tab-events.html',
               controller: 'EventsController'
            }
         }
      })

      .state('tab.chats', {
         url: '/chats',
         views: {
            'tab-chats': {
               templateUrl: 'app/components/tabs/tab-chat/tab-chat.html',
               controller: 'ChatsController'
            }
         }
      })

      .state('tab.chat-detail', {
         url: '/chats/:chatId',
         views: {
            'tab-chats': {
               templateUrl: 'app/components/tabs/tab-chat/chat-detail.html',
               controller: 'ChatDetailController'
            }
         }
      })

      .state('tab.account', {
         url: '/account',
         views: {
            'tab-account': {
               templateUrl: 'app/components/tabs/tab-account/tab-account.html',
               controller: 'AccountController'
            }
         }
      })

      .state('tab.schedule', {
         url: '/schedule',
         views: {
            'tab-schedule': {
               templateUrl: 'app/components/tabs/tab-schedule/tab-schedule.html',
               controller: 'ScheduleController'
            }
         }
      })
});
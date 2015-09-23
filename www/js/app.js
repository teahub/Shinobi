angular.module('app', ['ionic', 'app.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/menu/profile');

      $stateProvider

      .state('account', {
          url: '/account',
          abstract: true,
          templateUrl: 'views/layout/account.html',
          controller: 'AccountCtrl'
      })
      .state('account.login', {
          url: '/login',
          views : {
              content: {
                  templateUrl: 'views/account/login.html'
              }
          }
      })

      .state('account.singup', {
          url: '/singup',
          views : {
              content: {
                  templateUrl: 'views/account/singup.html'
              }
          }
      })
          .state('account.terms', {
              url: '/terms',
              views : {
                  content: {
                      templateUrl: 'views/account/terms.html'
                  }
              }
          })

      .state('menu', {
          url: '/menu',
          abstract: true,
          templateUrl: 'views/layout/menu.html',
          controller: 'MenuCtrl'
      })

      .state('menu.profile', {
        url:'/profile',
        views : {
          content:{
            templateUrl: 'views/menu/profile.html'
          }
        }
      })
      .state('menu.config', {
        url:'/config',
        views : {
          content:{
            templateUrl: 'views/menu/config.html'
          }
        }
      })
      .state('menu.teste', {
        url:'/teste',
        views : {
          content:{
            templateUrl: 'views/menu/teste.html'
          }
        }
      });
});

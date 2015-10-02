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

      .state('account.signup', {
          url: '/signup',
          views : {
              content: {
                  templateUrl: 'views/account/signup.html'
              }
          }
      })
      .state('account.confirm', {
          url: '/signup/confirm',
          views : {
              content: {
                  templateUrl: 'views/account/confirm.html'
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

       .state('menu.progress', {
         url:'/progress',
         views : {
            content:{
              templateUrl: 'views/menu/progress.html'
           }
         }
      })

      .state('menu.areas', {
         url:'/areas',
         views : {
            content:{
              templateUrl: 'views/menu/areas.html'
           }
         }
      })

      .state('menu.simulated', {
          url:'/areas/simulated',
          views : {
            content:{
              templateUrl: 'views/menu/simulated.html'
            }
         }
      })

      .state('menu.questions', {
         url:'/areas/simulated/questions',
         views : {
           content:{
              templateUrl: 'views/menu/questions.html'
           }
         }
      })

      .state('menu.ranking', {
         url:'/ranking',
         views : {
             content:{
                 templateUrl: 'views/menu/ranking.html'
             },
             rightMenu:{
                 templateUrl: 'views/menu/ranking-filter.html'
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

      .state('menu.help', {
        url:'/help',
        views : {
          content:{
            templateUrl: 'views/menu/help.html'
          }
        }
      });
});

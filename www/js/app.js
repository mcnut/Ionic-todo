angular.module('starter', ['ionic', 'starter.controllers','ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

 $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/todo',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.work', {
    url: '/work',
    views: {
      'work': {
        templateUrl: 'templates/work.html',
        controller: 'WorkCtrl'
      }
    }
  })

  .state('tab.home', {
      url: '/home',
      views: {
        'home': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

  .state('tab.misc', {
    url: '/misc',
    views: {
      'misc': {
        templateUrl: 'templates/misc.html',
        controller: 'MiscCtrl'
      }
    }
  })

  // default home page
  $urlRouterProvider.otherwise('/todo/work');

});
